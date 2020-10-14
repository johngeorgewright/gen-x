# @gen-x/util

> GenX Utitilies

## List

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
import { List } from '@gen-x/util'

const iterate = genX(() => new List(1, 2, 3, 4))

for await (const x of iterate()) {
  console.info(x)
}

// List { 1, 2, 3, 4 }
```

A `List` has similar methods to an array:

- `every`
- `filter`
- `forEach`
- `map`
- `reverse`
- `some`

Apart from being non-iterable, there are a couple of main differences:

1. `forEach`'s iteration can be stopped by returning `List.BREAK`

   ```typescript
   const list = new List(1, 2, 3, 4)

   list.forEach((x) => {
     if (x >= 3) {
       return List.BREAK
     }
     console.info(`${x} is less than 3`)
   })

   // 1 is less than 3
   // 2 is less than 3
   ```

1. There is a `toArray()` method which will return the list as an array

1. You'll need to use the `get()` method to access a property by index:
   ```typescript
   const list = new List(1, 2, 3, 4)
   console.info(list.get(1))
   // 2
   ```

## filter

The `filter` utilty provides a way of filtering results in the pipeline:

```typescript
import genX from '@gen-x/core'
import { filter } from '@gen-x/util'

const iterate = genX(
  () => [1, 2, 3, 4],
  filter((x) => x < 3)
)

for await (const x of iterate()) {
  console.info(x)
}

// 1
// 2
```

## run

The `run` utility is a shorthand to run the pipeline without opening up a `for` loop:

```typescript
import genX from '@gen-x/core'
import { run } from '@gen-x/util'

const iterate = genX(() => [1, 2, 3, 4], console.info)

run(iterate)

// 1
// 2
// 3
// 4
```

You can also pass an initial argument:

```typescript
import genX from '@gen-x/core'
import { run } from '@gen-x/util'

const iterate = genX((x) => x + 1, console.info)

run(iterate, 1)

// 2
```

## uniq

The `uniq` utility makes sure that only uniq items are yielded in the pipeline.

```typescript
import genX from '@gen-x/core'
import { uniq } from '@gen-x/util'

const iterate = genX(() => [1, 1, 2, 2], uniq())

for await (const x of iterate()) {
  console.info(x)
}

// 1
// 2
```

**WARNING**: This utility keeps state and could potentially cause a memory leak. It's wise to clean up when you're finished:

```typescript
import genX from '@gen-x/core'
import { uniq } from '@gen-x/util'

const uniqueNumbers = uniq<number>()

const iterate = genX(() => [1, 1, 2, 2], uniqueNumbers)

for await (const x of iterate()) {
  console.info(x)
}

// 1
// 2

uniqueNumbers.clear()
```
