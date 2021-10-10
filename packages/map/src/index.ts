export default function map<O, I>(fn: (i: I) => O) {
  return function* (i: I) {
    yield fn(i)
  }
}
