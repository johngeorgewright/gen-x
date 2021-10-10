# @gen-x/silo

Spreading data from one generator to another.

```typescript
import genX from '@gen-x/core'
import run from '@gen-x/run'
import createSilo from '@gen-x/silo'

const data = createSilo<number>()

const input = genX(function* () {
  for (let i = 0; i < 5; i++) {
    yield i
  }
}, data.in)

const output = genX(data.fork(), (input) => input * 2)()

await run(input)
data.finish() // Call at some point to prevent the output waiting forever

for await (const v of output) {
  console.info(v)
  // 0
  // 2
  // 4
  // 6
  // 8
}
```
