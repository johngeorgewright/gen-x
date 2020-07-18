import genX from '../gen-x'

test('no operators', async () => {
  const iterator = genX()('hello world')

  expect(await iterator.next()).toEqual({ value: 'hello world', done: false })
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

test('generators', async () => {
  const iterator = genX(
    function* (x: number) {
      yield x + 1
      yield x + 2
      yield x + 3
    },
    (x) => x * 2,
    function* (x: number) {
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
    function* (x: number) {
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
