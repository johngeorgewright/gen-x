import genX from '@gen-x/core'
import uniq from './uniq'

test('uniq', async () => {
  const iterator = genX(function* (xs: number[]) {
    for (const x of xs) {
      yield x
    }
  }, uniq())([1, 1, 1, 2, 3, 4, 4, 4])

  expect(await iterator.next()).toEqual({ value: 1, done: false })
  expect(await iterator.next()).toEqual({ value: 2, done: false })
  expect(await iterator.next()).toEqual({ value: 3, done: false })
  expect(await iterator.next()).toEqual({ value: 4, done: false })
  expect(await iterator.next()).toEqual({ done: true })
})
