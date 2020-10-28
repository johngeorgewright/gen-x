export default function uniq<T>() {
  const set = new Set<T>()

  function* _uniq(input: T) {
    if (!set.has(input)) {
      set.add(input)
      yield input
    }
  }

  _uniq.clear = () => {
    set.clear()
  }

  return _uniq
}
