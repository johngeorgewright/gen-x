# @gen-x/filter

The `filter` utilty provides a way of filtering results in the pipeline:

```typescript
import genX from '@gen-x/core'
import filter from '@gen-x/filter'

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
