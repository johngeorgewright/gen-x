import curry from './curry'

test('curry()', () => {
  const curried = curry((a: number, b: number, c: string) => [a, b, c])
  expect(curried(1, 2, 'foo')).toEqual([1, 2, 'foo'])
  expect(curried(1, 2)('foo')).toEqual([1, 2, 'foo'])
  expect(curried(1)(2)('foo')).toEqual([1, 2, 'foo'])
})
