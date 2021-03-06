import genX from '../gen-x'
import { Readable as NodeJSReadableStream } from 'stream'

test('no operators', async () => {
  const iterator = genX()('hello world')

  expect(await iterator.next()).toEqual({ value: 'hello world', done: false })
  expect(await iterator.next()).toEqual({ done: true })
})

test('"none" values', async () => {
  const iterator = genX(
    () => [undefined, null],
    (x) => (x === undefined ? 'undefined' : 'null')
  )()

  expect(await iterator.next()).toEqual({
    value: 'undefined',
    done: false,
  })
  expect(await iterator.next()).toEqual({
    value: 'null',
    done: false,
  })
  expect(await iterator.next()).toEqual({ done: true })
})

test('fuctions', async () => {
  const iterator = genX(
    (x: number) => x + 2,
    (x) => x * 2
  )(1)

  expect(await iterator.next()).toEqual({ value: 6, done: false })
  expect(await iterator.next()).toEqual({ done: true })
})

test('async functions', async () => {
  const iterator = genX(
    (x: number) => Promise.resolve(x + 2),
    async (x) => x * 2
  )(1)

  expect(await iterator.next()).toEqual({ value: 6, done: false })
  expect(await iterator.next()).toEqual({ done: true })
})

test('nested arrays', async () => {
  const iterator = genX(
    () => [1, 2],
    (x) => Array(x).fill(x)
  )()

  expect(await iterator.next()).toEqual({ value: 1, done: false })
  expect(await iterator.next()).toEqual({ value: 2, done: false })
  expect(await iterator.next()).toEqual({ value: 2, done: false })
  expect(await iterator.next()).toEqual({ done: true })
})

test('generators', async () => {
  const iterator = genX(
    function* (x: number) {
      yield x + 1
      yield x + 2
      yield x + 3
    },
    (x) => x * 2,
    function* (x) {
      yield x * 2
      yield x * 3
    }
  )(1)

  expect(await iterator.next()).toEqual({ value: 8, done: false })
  expect(await iterator.next()).toEqual({ value: 12, done: false })
  expect(await iterator.next()).toEqual({ value: 12, done: false })
  expect(await iterator.next()).toEqual({ value: 18, done: false })
  expect(await iterator.next()).toEqual({ value: 16, done: false })
  expect(await iterator.next()).toEqual({ value: 24, done: false })
  expect(await iterator.next()).toEqual({ done: true })
})

test('async generators', async () => {
  const iterator = genX(
    async function* (x: number) {
      yield await Promise.resolve(x + 1)
      yield await Promise.resolve(x + 2)
      yield await Promise.resolve(x + 3)
    },
    (x) => {
      return x * 2
    },
    function* (x) {
      yield x * 2
      yield x * 3
    }
  )(1)

  expect(await iterator.next()).toEqual({ value: 8, done: false })
  expect(await iterator.next()).toEqual({ value: 12, done: false })
  expect(await iterator.next()).toEqual({ value: 12, done: false })
  expect(await iterator.next()).toEqual({ value: 18, done: false })
  expect(await iterator.next()).toEqual({ value: 16, done: false })
  expect(await iterator.next()).toEqual({ value: 24, done: false })
  expect(await iterator.next()).toEqual({ done: true })
})

test('ReadableStream', async () => {
  const iterator = genX(
    () =>
      new ReadableStream<number>({
        start(controller) {
          controller.enqueue(1)
          controller.enqueue(2)
          controller.enqueue(3)
          controller.close()
        },
      }),
    (x) => x + 1
  )()

  expect(await iterator.next()).toEqual({ value: 2, done: false })
  expect(await iterator.next()).toEqual({ value: 3, done: false })
  expect(await iterator.next()).toEqual({ value: 4, done: false })
  expect(await iterator.next()).toEqual({ done: true })
})

test('ReadableStreamReader', async () => {
  const iterator = genX(
    () =>
      new ReadableStream<number>({
        start(controller) {
          controller.enqueue(1)
          controller.enqueue(2)
          controller.enqueue(3)
          controller.close()
        },
      }).getReader(),
    (x) => x + 1
  )()

  expect(await iterator.next()).toEqual({ value: 2, done: false })
  expect(await iterator.next()).toEqual({ value: 3, done: false })
  expect(await iterator.next()).toEqual({ value: 4, done: false })
  expect(await iterator.next()).toEqual({ done: true })
})

test('Node.JS Readable streams', async () => {
  const iterator = genX(
    () =>
      new NodeJSReadableStream({
        read() {
          this.push('1')
          this.push('2')
          this.push(null)
        },
      }),
    Number
  )()

  expect(await iterator.next()).toEqual({ value: 12, done: false })
  expect(await iterator.next()).toEqual({ done: true })
})

test('strings dont iterate', async () => {
  const iterator = genX(() => "I don't iterate")()

  expect(await iterator.next()).toEqual({
    value: "I don't iterate",
    done: false,
  })
})

test('gen-x', async () => {
  const iterator = genX(
    genX(
      (x: number) => x + 2,
      (x) => x * 2
    ),
    genX(
      (x: number) => Promise.resolve(x + 2),
      async (x) => x * 2
    )
  )(1)

  expect(await iterator.next()).toEqual({ value: 16, done: false })
  expect(await iterator.next()).toEqual({ done: true })
})
