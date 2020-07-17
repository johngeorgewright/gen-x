type SegmentInput<T> = T extends AsyncGenerator<infer V>
  ? V
  : T extends Generator<infer V>
  ? V
  : T extends Promise<infer V>
  ? V
  : T

type Segment<I, O> = (input: SegmentInput<I>) => O

export default function caterpillar<I, O1>(): (input: I) => AsyncGenerator<O1>
export default function caterpillar<I, O1>(
  s1: Segment<I, O1>
): (input: I) => AsyncGenerator<O1>
export default function caterpillar<I, O1, O2>(
  s1: Segment<I, O1>,
  s2: Segment<O1, O2>
): (input: I) => AsyncGenerator<O2>
export default function caterpillar<I, O1, O2, O3>(
  s1: Segment<I, O1>,
  s2: Segment<O1, O2>,
  s3: Segment<O2, O3>
): (input: I) => AsyncGenerator<O3>
export default function caterpillar(...segments: any[]) {
  return async function* (input: any) {
    let value = input

    for (let i = 0; i < segments.length; i++) {
      value = segments[i](value)

      if (isPromise(value)) {
        value = await value
      } else if (isGenerator(value)) {
        const rest = segments.slice(i + 1) as [any] // Hack cast as TS doesn't know the length

        for (const item of value) {
          yield* caterpillar(...rest)(item)
        }

        return
      } else if (isAsyncGenerator(value)) {
        const rest = segments.slice(i + 1) as [any] // Hack cast as TS doesn't know the length

        for await (const item of value) {
          yield* caterpillar(...rest)(item)
        }

        return
      }
    }

    yield value
  }
}

function isGenerator(x: any): x is Generator<any> {
  return !!x[Symbol.iterator]
}

function isAsyncGenerator(x: any): x is AsyncGenerator<any> {
  return !!x[Symbol.asyncIterator]
}

function isPromise(x: any): x is Promise<any> {
  return typeof x.then === 'function'
}
