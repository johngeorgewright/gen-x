export type OperatorInput<T> = T extends AsyncGenerator<infer V>
  ? V
  : T extends Generator<infer V>
  ? V
  : T extends Promise<infer V>
  ? V
  : T extends ReadableStream<infer V>
  ? V
  : T

export type Operator<I, O> = (input: OperatorInput<I>) => O
