import run from './run'
import genX from '@gen-x/core'

test('run()', async () => {
  const fn = jest.fn()
  const iterator = genX(function* () {
    for (let i = 0; i < 2; i++) {
      yield i
    }
  }, fn)

  await run(iterator)
  expect(fn).toHaveBeenCalledTimes(2)
  expect(fn.mock.calls).toMatchInlineSnapshot(`
    Array [
      Array [
        0,
      ],
      Array [
        1,
      ],
    ]
  `)
})

test('run(arg)', async () => {
  const fn = jest.fn()
  const iterator = genX(
    (x: number) => x + 2,
    function* (x: number) {
      for (let i = 0; i < x; i++) {
        yield i
      }
    },
    (x) => x * 2,
    fn
  )

  await run(iterator, 1)
  expect(fn).toHaveBeenCalledTimes(3)
  expect(fn.mock.calls).toMatchInlineSnapshot(`
    Array [
      Array [
        0,
      ],
      Array [
        2,
      ],
      Array [
        4,
      ],
    ]
  `)
})
