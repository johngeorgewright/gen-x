import genX from '@gen-x/core'
import filter from './filter'

test('filter', async () => {
  const iterator = genX(
    function* (xs: number[]) {
      for (const x of xs) {
        yield x
      }
    },
    filter((x) => x % 2 === 0)
  )([1, 2, 3, 4, 5, 6, 7, 8, 9])

  expect(await iterator.next()).toEqual({ value: 2, done: false })
  expect(await iterator.next()).toEqual({ value: 4, done: false })
  expect(await iterator.next()).toEqual({ value: 6, done: false })
  expect(await iterator.next()).toEqual({ value: 8, done: false })
  expect(await iterator.next()).toEqual({ done: true })
})
