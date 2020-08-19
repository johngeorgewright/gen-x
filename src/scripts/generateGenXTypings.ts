import * as path from 'path'
import { writeFileSync } from 'fs'
import range from 'lodash.range'
import last from 'lodash.last'

const outputFile = path.resolve(__dirname, '..', 'types', 'GenX.ts')
const numRange = range(1, 101).map((num) => range(1, num + 1))

writeFileSync(
  outputFile,
  `
  import { Operator } from './Operator'

  export default interface GenX {
    genX<I, O1>(): (input?: I) => AsyncGenerator<O1>
    
    ${numRange
      .map(
        (nums) => `
    genX<${Os(nums)}>(
      operator1: () => O1,
      ${otherAguments(nums)}
    ): () => AsyncGenerator<O${last(nums)}>

    genX<I, ${Os(nums)}>(
      operator1: (input: I) => O1,
      ${otherAguments(nums)}
    ): (input: I) => AsyncGenerator<O${last(nums)}>
    `
      )
      .join('')}
  }
`
)

function Os(nums: number[]) {
  return nums.map((num) => `O${num}`).join(', ')
}

function otherAguments(nums: number[]) {
  return nums
    .slice(1)
    .map(
      (num) =>
        `operator${num}: Operator<${num === 1 ? 'I' : `O${num - 1}`}, O${num}>,`
    )
    .join('\n')
}
