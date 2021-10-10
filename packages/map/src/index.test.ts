import genX from '@gen-x/core'
import map from '.'

test('map', async () => {
  const iterator = genX(
    () => [1, 2, 3, 4],
    map((x) => x * 2)
  )()

  expect(await iterator.next()).toEqual({ value: 2, done: false })
  expect(await iterator.next()).toEqual({ value: 4, done: false })
  expect(await iterator.next()).toEqual({ value: 6, done: false })
  expect(await iterator.next()).toEqual({ value: 8, done: false })
  expect(await iterator.next()).toEqual({ done: true })
})
