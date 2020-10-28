export default function filter<T>(fn: (input: T) => boolean) {
  return function* (input: T) {
    if (fn(input)) {
      yield input
    }
  }
}
