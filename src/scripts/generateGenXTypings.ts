import ejs from 'ejs'
import * as path from 'path'
import { readFileSync, writeFileSync } from 'fs'
import range from 'lodash.range'

const outputFile = path.resolve(__dirname, '..', 'types', 'GenX.ts')
const templateFile = path.resolve(__dirname, '..', 'types', 'GenX.ts.ejs')
const template = readFileSync(templateFile)
const output = ejs.render(template.toString(), {
  range: range(1, 101).map((num) => range(1, num + 1)),
})
writeFileSync(outputFile, output)
