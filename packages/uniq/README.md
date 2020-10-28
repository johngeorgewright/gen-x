# @gen-x/uniq

The `uniq` utility makes sure that only uniq items are yielded in the pipeline.

```typescript
import genX from '@gen-x/core'
import uniq from '@gen-x/uniq'

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
import uniq from '@gen-x/uniq'

const uniqueNumbers = uniq<number>()

const iterate = genX(() => [1, 1, 2, 2], uniqueNumbers)

for await (const x of iterate()) {
  console.info(x)
}

// 1
// 2

uniqueNumbers.clear()
```
