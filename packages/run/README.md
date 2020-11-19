# @gen-x/run

The `run` utility is a shorthand to run the pipeline without opening up a `for` loop:

```typescript
import genX from '@gen-x/core'
import run from '@gen-x/run'

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
import run from '@gen-x/run'

const iterate = genX((x) => x + 1, console.info)

run(iterate, 1)

// 2
```
