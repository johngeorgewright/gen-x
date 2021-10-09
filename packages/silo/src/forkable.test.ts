import genX from '@gen-x/core'
import { forkableSilo } from '.'
import run from '@gen-x/run'

test('forking multiple outputs', async () => {
  const silo = forkableSilo<number>()
  const siloIn = silo.in()
  const siloOut1 = silo.fork()
  const siloOut2 = silo.fork()

  const iterator1 = genX(function* () {
    for (let i = 0; i < 5; i++) {
      yield i
    }
  }, siloIn)

  await run(iterator1)

  const iterator2 = genX(siloOut1, (input) => input * 2)()
  const iterator3 = genX(siloOut2, (input) => input * 3)()

  expect(await iterator2.next()).toEqual({ value: 0, done: false })
  expect(await iterator3.next()).toEqual({ value: 0, done: false })
  expect(await iterator2.next()).toEqual({ value: 2, done: false })
  expect(await iterator3.next()).toEqual({ value: 3, done: false })
  expect(await iterator2.next()).toEqual({ value: 4, done: false })
  expect(await iterator3.next()).toEqual({ value: 6, done: false })
  expect(await iterator2.next()).toEqual({ value: 6, done: false })
  expect(await iterator3.next()).toEqual({ value: 9, done: false })
  expect(await iterator2.next()).toEqual({ value: 8, done: false })
  expect(await iterator3.next()).toEqual({ value: 12, done: false })
  expect(await iterator2.next()).toEqual({ done: true })
  expect(await iterator3.next()).toEqual({ done: true })
})
