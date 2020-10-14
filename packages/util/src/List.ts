export default class List<T> {
  private items: T[]

  constructor(...items: T[]) {
    this.items = items
  }

  every(fn: (item: T) => boolean) {
    return this.items.every(fn)
  }

  filter(fn: (item: T) => boolean) {
    return new List(...this.items.filter(fn))
  }

  forEach(fn: (item: T) => void | symbol) {
    for (let i = 0; i < this.items.length; i++) {
      if (fn(this.items[i]) === List.BREAK) {
        break
      }
    }
  }

  get(index: number): T | undefined {
    return this.items[index]
  }

  map<X>(fn: (item: T) => X) {
    return new List(...this.items.map(fn))
  }

  reverse(): List<T> {
    const items = Array(this.items.length)
    for (let i = 0, j = items.length - 1; i < items.length; i++, j--) {
      items[j] = this.items[i]
    }
    return new List(...items)
  }

  some(fn: (item: T) => boolean) {
    return this.items.some(fn)
  }

  toArray() {
    return [...this.items]
  }

  static readonly BREAK = Symbol('Break List')
}
