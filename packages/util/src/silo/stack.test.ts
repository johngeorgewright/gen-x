import genX from '@gen-x/core'
import { silo } from '..'
import run from '../run'

test('spreading output', async () => {
  const s = silo<number>()

  const iterator1 = genX(function* () {
    for (let i = 0; i < 5; i++) {
      yield i
    }
  }, s.in)

  await run(iterator1)

  const iterator2 = genX(s.out, (input) => input * 2)()
  const iterator3 = genX(s.out, (input) => input * 3)()

  expect(await iterator2.next()).toEqual({ value: 0, done: false })
  expect(await iterator3.next()).toEqual({ value: 3, done: false })
  expect(await iterator2.next()).toEqual({ value: 4, done: false })
  expect(await iterator3.next()).toEqual({ value: 9, done: false })
  expect(await iterator2.next()).toEqual({ value: 8, done: false })
  expect(await iterator2.next()).toEqual({ done: true })
  expect(await iterator3.next()).toEqual({ done: true })
})
