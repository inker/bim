export default class WeakBiMap<K extends object, V extends object> implements WeakMap<K, V> {
  private left: WeakMap<K, V>
  private right: WeakMap<V, K>

  constructor(iterable?: Iterable<[K, V]>) {
      this.left = new WeakMap<K, V>()
      this.right = new WeakMap<V, K>()
      if (iterable === undefined) {
          return
      }
      for (let [k, v] of iterable as any) {
          this.left.set(k, v)
          this.right.set(v, k)
      }
  }

  clear(): void {
      console.error('method clear is deprecated')
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

  get(key: K): V | undefined {
      return this.left.get(key)
  }

  has(key: K): boolean {
      return this.left.has(key)
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
