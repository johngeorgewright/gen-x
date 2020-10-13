import { run } from '.'
import genX from '@gen-x/core'

test('run(arg)', async () => {
  const fn = jest.fn()
  const iterator = genX(
    (x: number) => x + 2,
    (x) => x * 2,
    fn
  )

  await run(iterator, 1)
  expect(fn).toHaveBeenCalledTimes(2)
  expect(fn.mock.calls).toMatchInlineSnapshot()
})
