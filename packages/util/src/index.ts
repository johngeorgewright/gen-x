export function filter<T extends any>(fn: (input: T) => boolean) {
  return function* (input: T) {
    if (fn(input)) {
      yield input
    }
  }
}
