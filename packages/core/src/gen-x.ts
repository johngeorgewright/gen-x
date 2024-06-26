import { Operator } from './types/Operator'
import GenX from './types/GenX'

const genX: GenX['genX'] = (...operators: Operator<any, any>[]) =>
  async function* (input?: any) {
    let value = input

    for (let i = 0; i < operators.length; i++) {
      value = operators[i](value)

      if (isNone(value)) {
        continue
      } else if (isPromise(value)) {
        value = await value
      } else if (isIterable(value) && typeof value !== 'string') {
        const pipe = pipeRest(i, operators)
        for (const item of value) yield* pipe(item)
        return
      } else if (isAsyncIterable(value)) {
        const pipe = pipeRest(i, operators)
        for await (const item of value) yield* pipe(item)
        return
      } else if (isIterator(value)) {
        const pipe = pipeRest(i, operators)
        for (let v = await value.next(); !v.done; v = await value.next())
          yield* pipe(v.value)
        return
      } else if (global.ReadableStream && isReadableStream(value)) {
        yield* await generateFromReader(
          pipeRest(i, operators),
          value.getReader()
        )
        return
      } else if (isReadableStreamReader(value)) {
        yield* await generateFromReader(pipeRest(i, operators), value)
        return
      }
    }

    yield value
  }

export default genX

function pipeRest(index: number, operators: Operator<any, any>[]) {
  // Hack cast as TS doesn't know the length
  // "Expected 0-100 arguments, but got 0 or more."
  const rest = operators.slice(index + 1) as [Operator<any, any>]
  return genX(...rest) as (
    x: Operator<any, any>
  ) => AsyncGenerator<any, any, unknown>
}

async function generateFromReader<T>(
  pipe: (input?: any) => AsyncGenerator<T>,
  reader: ReadableStreamReader<T>
) {
  return reader
    .read()
    .then(async function* process({ done, value }): AsyncGenerator<T> {
      if (done) {
        return
      }

      yield* pipe(value)
      yield* await reader.read().then(process)
    })
}

function isIterable(x: any): x is Iterable<any> {
  return !!x[Symbol.iterator]
}

function isIterator(x: any): x is Iterator<any> | AsyncIterator<any> {
  return typeof x === 'object' && x !== null && typeof x.next === 'function'
}

function isAsyncIterable(x: any): x is AsyncIterable<any> {
  return !!x[Symbol.asyncIterator]
}

function isPromise<T>(x: any): x is Promise<T> {
  return typeof x.then === 'function'
}

function isReadableStream<T>(x: any): x is ReadableStream<T> {
  return x instanceof ReadableStream
}

function isReadableStreamReader<T>(x: any): x is ReadableStreamReader<T> {
  return (
    typeof x.cancel === 'function' &&
    typeof x.read === 'function' &&
    typeof x.releaseLock === 'function'
  )
}

function isNone(x: any): x is null | undefined {
  return typeof x === 'undefined' || x === null
}
