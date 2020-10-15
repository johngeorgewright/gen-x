import genX from '@gen-x/core'
import { list } from '.'

test('list.create', async () => {
  const iterator = genX(() => list.create(1, 2, 3, 4))()

  expect(await iterator.next()).toMatchInlineSnapshot(`
    Object {
      "done": false,
      "value": Object {
        "items": Array [
          2,
          3,
          4,
          5,
        ],
      },
    }
  `)

  expect(await iterator.next()).toEqual({ done: true })
})

test('list.reverse', () => {
  const l = list.create(1, 2, 3, 4, 5, 6)
  expect(list.reverse(l)).toMatchInlineSnapshot(`
    Object {
      "items": Array [
        6,
        5,
        4,
        3,
        2,
        1,
      ],
    }
  `)
  expect(l).toMatchInlineSnapshot(`
    Object {
      "items": Array [
        1,
        2,
        3,
        4,
        5,
        6,
      ],
    }
  `)
})
