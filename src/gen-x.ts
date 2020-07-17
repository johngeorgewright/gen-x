type SegmentInput<T> = T extends AsyncGenerator<infer V>
  ? V
  : T extends Generator<infer V>
  ? V
  : T extends Promise<infer V>
  ? V
  : T

type Segment<I, O> = (input: SegmentInput<I>) => O

export default function genX<I, O1>(): (input: I) => AsyncGenerator<O1>
export default function genX<I, O1>(
  s1: Segment<I, O1>
): (input: I) => AsyncGenerator<O1>
export default function genX<I, O1, O2>(
  s1: Segment<I, O1>,
  s2: Segment<O1, O2>
): (input: I) => AsyncGenerator<O2>
export default function genX<I, O1, O2, O3>(
  s1: Segment<I, O1>,
  s2: Segment<O1, O2>,
  s3: Segment<O2, O3>
): (input: I) => AsyncGenerator<O3>
export default function genX<I, O1, O2, O3, O4>(
  s1: Segment<I, O1>,
  s2: Segment<O1, O2>,
  s3: Segment<O2, O3>,
  s4: Segment<O3, O4>
): (input: I) => AsyncGenerator<O4>
export default function genX<I, O1, O2, O3, O4, O5>(
  s1: Segment<I, O1>,
  s2: Segment<O1, O2>,
  s3: Segment<O2, O3>,
  s4: Segment<O3, O4>,
  s5: Segment<O4, O5>
): (input: I) => AsyncGenerator<O5>
export default function genX<I, O1, O2, O3, O4, O5, O6>(
  s1: Segment<I, O1>,
  s2: Segment<O1, O2>,
  s3: Segment<O2, O3>,
  s4: Segment<O3, O4>,
  s5: Segment<O4, O5>,
  s6: Segment<O5, O6>
): (input: I) => AsyncGenerator<O6>
export default function genX<I, O1, O2, O3, O4, O5, O6, O7>(
  s1: Segment<I, O1>,
  s2: Segment<O1, O2>,
  s3: Segment<O2, O3>,
  s4: Segment<O3, O4>,
  s5: Segment<O4, O5>,
  s6: Segment<O5, O6>,
  s7: Segment<O6, O7>
): (input: I) => AsyncGenerator<O7>
export default function genX<I, O1, O2, O3, O4, O5, O6, O7, O8>(
  s1: Segment<I, O1>,
  s2: Segment<O1, O2>,
  s3: Segment<O2, O3>,
  s4: Segment<O3, O4>,
  s5: Segment<O4, O5>,
  s6: Segment<O5, O6>,
  s7: Segment<O6, O7>,
  s8: Segment<O7, O8>
): (input: I) => AsyncGenerator<O8>
export default function genX<I, O1, O2, O3, O4, O5, O6, O7, O8, O9>(
  s1: Segment<I, O1>,
  s2: Segment<O1, O2>,
  s3: Segment<O2, O3>,
  s4: Segment<O3, O4>,
  s5: Segment<O4, O5>,
  s6: Segment<O5, O6>,
  s7: Segment<O6, O7>,
  s8: Segment<O7, O8>,
  s9: Segment<O8, O9>
): (input: I) => AsyncGenerator<O9>
export default function genX<I, O1, O2, O3, O4, O5, O6, O7, O8, O9, O10>(
  s1: Segment<I, O1>,
  s2: Segment<O1, O2>,
  s3: Segment<O2, O3>,
  s4: Segment<O3, O4>,
  s5: Segment<O4, O5>,
  s6: Segment<O5, O6>,
  s7: Segment<O6, O7>,
  s8: Segment<O7, O8>,
  s9: Segment<O8, O9>,
  s10: Segment<O9, O10>
): (input: I) => AsyncGenerator<O10>
export default function genX(...segments: Segment<any, any>[]) {
  return async function* (input: any) {
    let value = input

    for (let i = 0; i < segments.length; i++) {
      value = segments[i](value)

      if (isPromise(value)) {
        value = await value
      } else if (isGenerator(value)) {
        const rest = segments.slice(i + 1) as [Segment<any, any>] // Hack cast as TS doesn't know the length
        const pipe = genX(...rest)

        for (const item of value) {
          yield* pipe(item)
        }

        return
      } else if (isAsyncGenerator(value)) {
        const rest = segments.slice(i + 1) as [Segment<any, any>] // Hack cast as TS doesn't know the length
        const pipe = genX(...rest)

        for await (const item of value) {
          yield* pipe(item)
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
