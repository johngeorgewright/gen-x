import type { Readable as NodeJSReadableStream } from 'stream'

export type OperatorInput<T> = T extends Iterable<infer V>
  ? V
  : T extends Iterator<infer V>
  ? V
  : T extends AsyncIterable<infer V>
  ? V
  : T extends AsyncIterator<infer V>
  ? V
  : T extends Promise<infer V>
  ? V
  : T extends ReadableStream<infer V>
  ? V
  : T extends ReadableStreamDefaultReader<infer V>
  ? V
  : T extends NodeJSReadableStream
  ? any
  : T

export type Operator<I, O> = (input: OperatorInput<I>) => O
