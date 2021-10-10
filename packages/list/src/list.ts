export interface List<T> {
  readonly items: T[]
}

export const Break = Symbol('break list')

export function create<T>(...items: T[]): List<T> {
  return {
    items,
  }
}

export function concat<T>({ items }: List<T>, ...listsRest: List<T>[]) {
  const itemsRest = listsRest.map(({ items }) => items)
  return create(...items.concat(...itemsRest))
}

export function every<T>(
  { items }: List<T>,
  fn: (item: T, index: number) => boolean
) {
  return items.every(fn)
}

export function filter<T>(
  { items }: List<T>,
  fn: (item: T, index: number) => boolean
) {
  return create(...items.filter(fn))
}

export function find<T>(
  { items }: List<T>,
  fn: (item: T, index: number) => boolean
) {
  return items.find(fn)
}

export function findIndex<T>(
  { items }: List<T>,
  fn: (item: T, index: number) => boolean
) {
  return items.findIndex(fn)
}

export function forEach<T>(
  { items }: List<T>,
  fn: (item: T, index: number) => void | symbol
) {
  for (let i = 0; i < items.length; i++) if (fn(items[i], i) === Break) break
}

export function from<T>(arrayLike: ArrayLike<T>) {
  return create(...Array.from(arrayLike))
}

export function get<T>({ items }: List<T>, index: number): T | undefined {
  return items[index]
}

export function includes<T>({ items }: List<T>, valueToFind: T) {
  return items.includes(valueToFind)
}

export function indexOf<T>({ items }: List<T>, searchElement: T) {
  return items.indexOf(searchElement)
}

export function join<T>({ items }: List<T>, separator?: string) {
  return items.join(separator)
}

export function keys<T>({ items }: List<T>) {
  return create(...items.keys())
}

export function lastIndexOf<T>({ items }: List<T>, searchElement: T) {
  return items.lastIndexOf(searchElement)
}

export function map<T, X>(
  { items }: List<T>,
  fn: (item: T, index: number) => X
) {
  return create(...items.map(fn))
}

export function pop<T>(list: List<T>) {
  return slice(list, 0, -1)
}

export function push<T>({ items }: List<T>, item: T) {
  return create(...items, item)
}

export function reduce<T, X>(
  { items }: List<T>,
  initialValue: X,
  fn: (acc: X, item: T, index: number) => X
) {
  return items.reduce(fn, initialValue)
}

export function reverse<T>({ items }: List<T>) {
  const reversed: T[] = Array(items.length)
  for (let i = 0, j = items.length - 1; i < items.length; i++, j--)
    reversed[j] = items[i]
  return create(...reversed)
}

export function shift<T>({ items }: List<T>) {
  return items.length ? items[0] : undefined
}

export function slice<T>({ items }: List<T>, start?: number, end?: number) {
  return create(...items.slice(start, end))
}

export function sort<T>({ items }: List<T>, fn?: (a: T, b: T) => number) {
  const array = [...items]
  return create(...array.sort(fn))
}

export function splice<T>(
  { items }: List<T>,
  start: number,
  deleteCount: number,
  ...replacements: T[]
) {
  const array = [...items]
  array.splice(start, deleteCount, ...replacements)
  return create(...array)
}

export function some<T>(
  { items }: List<T>,
  fn: (item: T, index: number) => boolean
) {
  return items.some(fn)
}

export function toArray<T>({ items }: List<T>) {
  return [...items]
}

export function unshift<T>({ items }: List<T>, item: T) {
  return create(item, ...items)
}
