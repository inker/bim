export default class BiMap<K, V> implements Map<K, V> {
  private left: Map<K, V>
  private right: Map<V, K>

  constructor(iterable?: Iterable<[K, V]>) {
      // @ts-ignore
      this.left = new Map<K, V>(iterable)
      this.right = new Map<V, K>()
      for (const [k, v] of this.left) {
          this.right.set(v, k)
      }
  }
  
  clear(): void {
      this.left.clear()
      this.right.clear()
  }

  delete(key: K): boolean {
      const val = this.left.get(key)
      // @ts-ignore
      if (!this.right.has(val)) {
          return false
      }
      // @ts-ignore
      this.right.delete(val)
      return this.left.delete(key)
  }

  entries(): IterableIterator<[K, V]> {
      return this.left.entries()
  }

  forEach(callbackfn: (value: V, index: K, map: Map<K, V>) => void, thisArg?: any): void {
      this.left.forEach(callbackfn, thisArg)
  }

  get(key: K): V | undefined {
      return this.left.get(key)
  }

  has(key: K): boolean {
      return this.left.has(key)
  }

  keys(): IterableIterator<K> {
      return this.left.keys()
  }
  
  set(key: K, value: V): this {
      const { left, right } = this
      const oldVal = left.get(key)
      const oldKey = right.get(value)
      if (left.has(key)) {
          // @ts-ignore
          right.delete(oldVal)
      }
      if (right.has(value)) {
          // @ts-ignore
          left.delete(oldKey)
      }
      left.set(key, value)
      right.set(value, key)
      return this
  }

  get size(): number {
      return this.left.size
  }

  values(): IterableIterator<V> {
      return this.left.values()
  }

  [Symbol.iterator]() {
      return this.left[Symbol.iterator]()
  }

  get [Symbol.toStringTag]() {
      return this.left[Symbol.toStringTag]
  }

  deleteValue(value: V) {
      const key = this.right.get(value)
      // @ts-ignore
      if (!this.left.has(key)) {
          return false
      }
      // @ts-ignore
      this.left.delete(key)
      return this.right.delete(value)        
  }

  getKey(value: V) {
      return this.right.get(value)
  }

  hasValue(value: V) {
      return this.right.has(value)
  }
}
