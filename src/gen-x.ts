import { Operator } from './types/Operator'
import GenX from './types/GenX'

const genX: GenX['genX'] = (...segments: Operator<any, any>[]) => {
  return async function* (input: any) {
    let value = input

    for (let i = 0; i < segments.length; i++) {
      value = segments[i](value)

      if (isPromise(value)) {
        value = await value
      } else if (isGenerator(value)) {
        // Hack cast as TS doesn't know the length
        // "Expected 0-10 arguments, but got 0 or more."
        const rest = segments.slice(i + 1) as [Operator<any, any>]
        const pipe = genX(...rest)

        for (const item of value) {
          yield* pipe(item)
        }

        return
      } else if (isAsyncGenerator(value)) {
        // Hack cast as TS doesn't know the length
        // "Expected 0-10 arguments, but got 0 or more."
        const rest = segments.slice(i + 1, 10) as [Operator<any, any>]
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

export default genX

function isGenerator(x: any): x is Generator<any> {
  return !!x[Symbol.iterator]
}

function isAsyncGenerator(x: any): x is AsyncGenerator<any> {
  return !!x[Symbol.asyncIterator]
}

function isPromise(x: any): x is Promise<any> {
  return typeof x.then === 'function'
}
