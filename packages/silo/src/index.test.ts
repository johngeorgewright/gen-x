import genX from '@gen-x/core'
import run from '@gen-x/run'
import createSilo from '.'

test('stacked output', async () => {
  const s = createSilo<number>()
  const output = s.fork()
  const iterator2 = genX(output, (input) => input * 2)()
  const iterator3 = genX(output, (input) => input * 3)()

  run(
    genX(function* () {
      for (let i = 0; i < 5; i++) {
        yield i
      }
      s.finish()
    }, s.in)
  )

  expect(await iterator2.next()).toEqual({ value: 0, done: false })
  expect(await iterator3.next()).toEqual({ value: 3, done: false })
  expect(await iterator2.next()).toEqual({ value: 4, done: false })
  expect(await iterator3.next()).toEqual({ value: 9, done: false })
  expect(await iterator2.next()).toEqual({ value: 8, done: false })
  expect(await iterator2.next()).toEqual({ done: true })
  expect(await iterator3.next()).toEqual({ done: true })
})

test('forking multiple outputs', async () => {
  const silo = createSilo<number>()
  const iterator2 = genX(silo.fork(), (input) => input * 2)()
  const iterator3 = genX(silo.fork(), (input) => input * 3)()

  run(
    genX(
      function* () {
        for (let i = 0; i < 5; i++) {
          yield i
        }
      },
      (i) => {
        silo.in(i)
        if (i === 4) silo.finish()
      }
    )
  )

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
