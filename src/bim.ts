export class BiMap<K, V> implements Map<K, V> {
    private left: Map<K, V>;
    private right: Map<V, K>;

    constructor(iterable?: Iterable<[K, V]>) {
        this.left = new Map<K, V>(iterable);
        this.right = new Map<V, K>();
        this.left.forEach(i => this.right.set(i));
    }
    
    clear(): void {
        this.left.clear();
        this.right.clear();
    }

    delete(key: K): boolean {
        const val = this.left.get(key);
        if (!this.right.has(val)) {
            return false;
        }
        this.right.delete(val);
        return this.left.delete(key);
    }

    entries(): IterableIterator<[K, V]> {
        return this.left.entries();
    }

    forEach(callbackfn: (value: V, index: K, map: Map<K, V>) => void, thisArg?: any): void {
        this.left.forEach(callbackfn, thisArg);
    }

    get(key: K): V {
        return this.left.get(key);
    }

    has(key: K): boolean {
        return this.left.has(key);
    }

    keys(): IterableIterator<K> {
        return this.left.keys();
    }
    
    set(key: K, value: V): this {
        const oldVal = this.left.get(key);
        const oldKey = this.right.get(value);
        if (this.left.has(key)) {
            this.right.delete(oldVal);
        }
        if (this.right.has(value)) {
            this.left.delete(oldKey);
        }
        this.left.set(key, value);
        this.right.set(value, key);
        return this;
    }

    get size(): number {
        return this.left.size;
    }

    values(): IterableIterator<V> {
        return this.left.values();
    }

    [Symbol.iterator]() {
        return this.left[Symbol.iterator]();
    }

    get [Symbol.toStringTag]() {
        return this.left[Symbol.toStringTag];
    }

    deleteValue(value: V) {
        const key = this.right.get(value);
        if (!this.left.has(key)) {
            return false;
        }
        this.left.delete(key);
        return this.right.delete(value);        
    }

    getKey(value: V) {
        return this.right.get(value);
    }

    hasValue(value: V) {
        return this.right.has(value);
    }
}

export class WeakBiMap<K, V> implements WeakMap<K, V> {
    private left: WeakMap<K, V>;
    private right: WeakMap<V, K>;

    constructor(iterable?: Iterable<[K, V]>) {
        this.left = new WeakMap<K, V>();
        this.right = new WeakMap<V, K>();
        if (iterable === undefined) return;
        for (let [k, v] of iterable as any) {
            this.left.set(k, v);
            this.right.set(v, k);
        }
    }

    clear(): void {
        console.error('method clear is deprecated');
    }

    delete(key: K): boolean {
        const val = this.left.get(key);
        if (!this.right.has(val)) {
            return false;
        }
        this.right.delete(val);
        return this.left.delete(key);
    }

    get(key: K): V {
        return this.left.get(key);
    }

    has(key: K): boolean {
        return this.left.has(key);
    }

    set(key: K, value: V): this {
        const oldVal = this.left.get(key);
        const oldKey = this.right.get(value);
        if (this.left.has(key)) {
            this.right.delete(oldVal);
        }
        if (this.right.has(value)) {
            this.left.delete(oldKey);
        }
        this.left.set(key, value);
        this.right.set(value, key);
        return this;   
    }

    get [Symbol.toStringTag]() {
        return this.left[Symbol.toStringTag];
    }

    deleteValue(value: V) {
        const key = this.right.get(value);
        if (!this.left.has(key)) {
            return false;
        }
        this.left.delete(key);
        return this.right.delete(value);       
    }

    getKey(value: V) {
        return this.right.get(value);
    }

    hasValue(value: V) {
        return this.right.has(value);
    }

}