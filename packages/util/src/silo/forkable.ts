export default function createForkableSilo<T>() {
  let nextIndex = 0
  const stacks: T[][] = []

  return {
    in: _siloIn,
    fork,
  }

  function _siloIn() {
    return function siloIn(input: T) {
      for (const stack of stacks) {
        stack.push(input)
      }
    }
  }

  function fork() {
    const index = nextIndex++
    stacks.push([])

    return function* siloOut() {
      const items = stacks[index]
      stacks[index] = []
      yield* items
    }
  }
}
