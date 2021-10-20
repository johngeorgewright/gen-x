import { EventIterator } from '@johngw/async-iterator'
import { withCounter } from '@johngw/function'

export default function createSilo<T>() {
  const stacks = new Map<number, EventIterator<T>>()

  return {
    finish: () => {
      for (const [_, stack] of stacks) {
        stack.cancel()
      }
    },

    in: (input: T) => {
      for (const [_, stack] of stacks) {
        stack.push(input)
      }
    },

    fork: withCounter((index) => {
      const stack = new EventIterator<T>(() => () => stacks.delete(index))
      stacks.set(index, stack)
      return () => stack
    }),
  }
}
