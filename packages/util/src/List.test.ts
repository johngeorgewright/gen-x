import genX from '@gen-x/core'
import { List } from '.'

test('list', async () => {
  const iterator = genX(
    () => new List(1, 2, 3, 4),
    (x) => x.map((y) => y + 1)
  )()

  expect(await iterator.next()).toMatchInlineSnapshot(`
    Object {
      "done": false,
      "value": List {
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

test('List.reverse()', () => {
  const list = new List(1, 2, 3, 4, 5, 6)
  expect(list.reverse()).toMatchInlineSnapshot(`
    List {
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
})
