export interface List<T> {
  readonly items: T[]
}

export const Break = Symbol('break list')

export function create<T>(...items: T[]): List<T> {
  return {
    items,
  }
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

export function forEach<T>(
  { items }: List<T>,
  fn: (item: T, index: number) => void | symbol
) {
  for (let i = 0; i < items.length; i++) {
    if (fn(items[i], i) === Break) {
      break
    }
  }
}

export function get<T>({ items }: List<T>, index: number): T | undefined {
  return items[index]
}

export function map<T, X>(
  { items }: List<T>,
  fn: (item: T, index: number) => X
) {
  return create(...items.map(fn))
}

export function reverse<T>({ items }: List<T>) {
  const reversed: T[] = Array(items.length)
  for (let i = 0, j = items.length - 1; i < items.length; i++, j--) {
    reversed[j] = items[i]
  }
  return create(...reversed)
}

export function some<T>(l: List<T>, fn: (item: T, index: number) => boolean) {
  return l.items.some(fn)
}

export function toArray<T>({ items }: List<T>) {
  return [...items]
}
