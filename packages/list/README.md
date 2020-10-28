# @gen-x/list

> List handling for gen-x

When GenX handles anything iterable, it will yield each individual item through the pipeline. Here's an example when returning or yielding an array from an operator in the pipeline:

```typescript
import genX from '@gen-x/core'

const iterate = genX(() => [1, 2, 3, 4])

for await (const x of iterate()) {
  console.info(x)
}

// 1
// 2
// 3
// 4
```

If you want to return a collection of items without it being iterated on, you could use a `List`, which is a simple, non-iterable, array structure.

```typescript
import genX from '@gen-x/core'
import * as list from '@gen-x/list'

const iterate = genX(() => list.create(1, 2, 3, 4))

for await (const x of iterate()) {
  console.info(x)
}

// {values: [1, 2, 3, 4]}
```

There are also utilities for traversing/manipulating a list, which are named the same as Array.prototype functions

- `concat`
- `every`
- `filter`
- `find`
- `findIndex`
- `forEach`
- `from`
- `includes`
- `indexOf`
- `join`
- `keys`
- `lastIndexOf`
- `map`
- `pop`
- `push`
- `reduce`
- `reverse`
- `shift`
- `slice`
- `some`
- `sort`
- `splice`
- `unshift`

Apart from being non-iterable, there are a couple of main differences:

1. Lists are immutable. All functions will return a new list.
1. `forEach`'s iteration can be stopped by returning `list.Break`

   ```typescript
   import * as list from '@gen-x/list'
   const l = list.create(1, 2, 3, 4)

   list.forEach(l, (x) => {
     if (x >= 3) {
       return list.Break
     }
     console.info(`${x} is less than 3`)
   })

   // 1 is less than 3
   // 2 is less than 3
   ```

1. There is a `list.toArray()` function which will return the list as an array
1. You'll need to use the `list.get()` function to access a property by index:
   ```typescript
   import * as list from '@gen-x/list'
   const l = list.create(1, 2, 3, 4)
   console.info(list.get(l, 1))
   // 2
   ```
