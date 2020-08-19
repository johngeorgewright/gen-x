import type { Readable as NodeJSReadableStream } from 'stream'

export type Extract<T> = T extends Iterable<infer V>
  ? V
  : T extends AsyncIterable<infer V>
  ? V
  : T extends Promise<infer V>
  ? V
  : T extends ReadableStream<infer V>
  ? V
  : T extends ReadableStreamReader<infer V>
  ? V
  : T extends NodeJSReadableStream
  ? any
  : T

export type Operator<I, O> = (input: Extract<I>) => O
