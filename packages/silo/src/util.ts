/**
 * Adds a counter to the function instructing how many
 * times the function has been called.
 */
export function withCounter<Args extends unknown[], R>(
  fn: (counter: number, ...args: Args) => R
) {
  let counter = 0
  return (...args: Args) => fn(counter++, ...args)
}
