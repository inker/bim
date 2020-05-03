import ReverseMap from './ReverseMap'

class BiMap<K, V> implements Map<K, V>, ReverseMap<K, V> {
  readonly #left: Map<K, V>
  readonly #right: Map<V, K>

  constructor(iterable?: Iterable<[K, V]>) {
    this.#left = new Map<K, V>()
    this.#right = new Map<V, K>()
    if (iterable === undefined) {
      return
    }
    for (const [k, v] of iterable) {
      this.#left.set(k, v)
      this.#right.set(v, k)
    }
  }

  clear(): void {
    this.#left.clear()
    this.#right.clear()
  }

  delete(key: K): boolean {
    const val = this.#left.get(key)!
    if (!this.#right.has(val)) {
      return false
    }
    this.#right.delete(val)
    return this.#left.delete(key)
  }

  entries(): IterableIterator<[K, V]> {
    return this.#left.entries()
  }

  forEach(callbackfn: (value: V, index: K, map: Map<K, V>) => void, thisArg?: any): void {
    this.#left.forEach(callbackfn, thisArg)
  }

  get(key: K): V | undefined {
    return this.#left.get(key)
  }

  has(key: K): boolean {
    return this.#left.has(key)
  }

  keys(): IterableIterator<K> {
    return this.#left.keys()
  }

  set(key: K, value: V): this {
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

  get size(): number {
    return this.#left.size
  }

  values(): IterableIterator<V> {
    return this.#left.values()
  }

  [Symbol.iterator]() {
    return this.#left[Symbol.iterator]()
  }

  get [Symbol.toStringTag]() {
    return this.#left[Symbol.toStringTag]
  }

  deleteValue(value: V): boolean {
    const key = this.#right.get(value) as K
    if (!this.#left.has(key)) {
      return false
    }
    this.#left.delete(key)
    return this.#right.delete(value)
  }

  getKey(value: V): K | undefined {
    return this.#right.get(value)
  }

  hasValue(value: V): boolean {
    return this.#right.has(value)
  }
}

export default BiMap
