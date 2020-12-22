export default function createStackSilo<T>() {
  let stack: T[] = []

  return {
    in: siloIn,
    out: siloOut,
  }

  function siloIn(input: T) {
    stack.push(input)
  }

  function* siloOut() {
    while (stack.length) {
      yield stack.shift() as T
    }
  }
}
