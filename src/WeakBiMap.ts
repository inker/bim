export default class WeakBiMap<K extends object, V extends object> implements WeakMap<K, V> {
  readonly #left: WeakMap<K, V>
  readonly #right: WeakMap<V, K>

  constructor(iterable?: Iterable<[K, V]>) {
    this.#left = new WeakMap<K, V>()
    this.#right = new WeakMap<V, K>()
    if (iterable === undefined) {
      return
    }
    for (const [k, v] of iterable) {
      this.#left.set(k, v)
      this.#right.set(v, k)
    }
  }

  // eslint-disable-next-line class-methods-use-this
  clear(): void {
    console.error('method clear is deprecated')
  }

  delete(key: K): boolean {
    const val = this.#left.get(key) as V
    if (!this.#right.has(val)) {
      return false
    }
    this.#right.delete(val)
    return this.#left.delete(key)
  }

  get(key: K): V | undefined {
    return this.#left.get(key)
  }

  has(key: K): boolean {
    return this.#left.has(key)
  }

  set(key: K, value: V): this {
    const left = this.#left
    const right = this.#right
    const oldVal = left.get(key) as V
    const oldKey = right.get(value) as K
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
