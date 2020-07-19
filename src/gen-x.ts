import { Operator } from './types/Operator'
import GenX from './types/GenX'
import { ReadableStream } from 'web-streams-polyfill/ponyfill'

const genX: GenX['genX'] = (...operators: Operator<any, any>[]) => {
  return async function* (input: any) {
    let value = input

    for (let i = 0; i < operators.length; i++) {
      value = operators[i](value)

      if (isPromise(value)) {
        value = await value
      } else if (isIterable(value)) {
        // Hack cast as TS doesn't know the length
        // "Expected 0-10 arguments, but got 0 or more."
        const rest = operators.slice(i + 1) as [Operator<any, any>]
        const pipe = genX(...rest)

        for (const item of value) {
          yield* pipe(item)
        }

        return
      } else if (isAsyncIterable(value)) {
        // Hack cast as TS doesn't know the length
        // "Expected 0-10 arguments, but got 0 or more."
        const rest = operators.slice(i + 1) as [Operator<any, any>]
        const pipe = genX(...rest)

        for await (const item of value) {
          yield* pipe(item)
        }

        return
      } else if (isReadableStream(value)) {
        const rest = operators.slice(i + 1) as [Operator<any, any>]
        const pipe = genX(...rest)
        const reader = value.getReader()
        yield* await reader
          .read()
          .then(async function* process({ done, value }): AsyncGenerator {
            if (done) {
              return
            }

            yield pipe(value)
            yield* await reader.read().then(process)
          })
        return
      }
    }

    yield value
  }
}

export default genX

function isIterable(x: any): x is Iterable<any> {
  return !!x[Symbol.iterator]
}

function isAsyncIterable(x: any): x is AsyncIterable<any> {
  return !!x[Symbol.asyncIterator]
}

function isPromise(x: any): x is Promise<any> {
  return typeof x.then === 'function'
}

function isReadableStream(x: any): x is ReadableStream {
  return x instanceof ReadableStream
}
