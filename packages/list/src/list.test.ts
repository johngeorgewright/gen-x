import genX from '@gen-x/core'
import * as list from './list'

test('list.create', async () => {
  const iterator = genX(() => list.create(1, 2, 3, 4))()

  expect(await iterator.next()).toMatchInlineSnapshot(`
    Object {
      "done": false,
      "value": Object {
        "items": Array [
          1,
          2,
          3,
          4,
        ],
      },
    }
  `)

  expect(await iterator.next()).toEqual({ done: true })
})

test('list.concat', async () => {
  let l = list.create(1, 2, 3, 4)
  l = list.concat(l, list.create(5, 6, 7, 8))
  expect(l).toMatchInlineSnapshot(`
    Object {
      "items": Array [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
      ],
    }
  `)
})

test('list.filter', async () => {
  let l = list.create(1, 2, 3, 4)
  l = list.filter(l, (x) => x % 2 === 0)
  expect(l).toMatchInlineSnapshot(`
    Object {
      "items": Array [
        2,
        4,
      ],
    }
  `)
})

describe('list.forEach', () => {
  test('looping', async () => {
    const retrieved: number[] = []
    const l = list.create(1, 2, 3, 4)
    list.forEach(l, (x) => {
      retrieved.push(x)
    })
    expect(retrieved).toEqual([1, 2, 3, 4])
  })

  test('breaking', async () => {
    const retrieved: number[] = []
    let l = list.create(1, 2, 3, 4)
    list.forEach(l, (x) => {
      if (x > 2) return list.Break
      retrieved.push(x)
      return
    })
    expect(retrieved).toEqual([1, 2])
  })
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
