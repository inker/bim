import ReverseMap from './ReverseMap'

class BiMap<K, V> implements Map<K, V>, ReverseMap<K, V> {
  readonly #left: Map<K, V>
  readonly #right: Map<V, K>

  constructor(iterable?: Iterable<[K, V]>) {
    this.#left = new Map<K, V>(iterable!)
    this.#right = new Map<V, K>()
    for (const [k, v] of this.#left) {
      this.#right.set(v, k)
    }
  }

  clear(): void {
    this.#left.clear()
    this.#right.clear()
  }

  delete(key: K) {
    const val = this.#left.get(key)!
    if (!this.#right.has(val)) {
      return false
    }
    this.#right.delete(val)
    return this.#left.delete(key)
  }

  entries() {
    return this.#left.entries()
  }

  forEach(callbackfn: (value: V, index: K, map: Map<K, V>) => void, thisArg?: any) {
    this.#left.forEach(callbackfn, thisArg)
  }

  get(key: K) {
    return this.#left.get(key)
  }

  has(key: K) {
    return this.#left.has(key)
  }

  keys() {
    return this.#left.keys()
  }

  set(key: K, value: V) {
    const left = this.#left
    const right = this.#right
    const oldVal = left.get(key)!
    const oldKey = right.get(value)!
    if (left.has(key)) {
      right.delete(oldVal)
    }
    if (right.has(value)) {
      left.delete(oldKey)
    }
    left.set(key, value)
    right.set(value, key)
    return this
  }

  get size() {
    return this.#left.size
  }

  values() {
    return this.#left.values()
  }

  [Symbol.iterator]() {
    return this.#left[Symbol.iterator]()
  }

  get [Symbol.toStringTag]() {
    return this.#left[Symbol.toStringTag]
  }

  deleteValue(value: V) {
    const key = this.#right.get(value) as K
    if (!this.#left.has(key)) {
      return false
    }
    this.#left.delete(key)
    return this.#right.delete(value)
  }

  getKey(value: V) {
    return this.#right.get(value)
  }

  hasValue(value: V) {
    return this.#right.has(value)
  }
}

export default BiMap
