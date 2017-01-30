export declare class BiMap<K, V> implements Map<K, V> {
    private left;
    private right;
    constructor(iterable?: Iterable<[K, V]>);
    clear(): void;
    delete(key: K): boolean;
    entries(): IterableIterator<[K, V]>;
    forEach(callbackfn: (value: V, index: K, map: Map<K, V>) => void, thisArg?: any): void;
    get(key: K): V;
    has(key: K): boolean;
    keys(): IterableIterator<K>;
    set(key: K, value: V): this;
    readonly size: number;
    values(): IterableIterator<V>;
    [Symbol.iterator](): IterableIterator<[K, V]>;
    readonly [Symbol.toStringTag]: "Map";
    deleteValue(value: V): boolean;
    getKey(value: V): K;
    hasValue(value: V): boolean;
}
export declare class WeakBiMap<K, V> implements WeakMap<K, V> {
    private left;
    private right;
    constructor(iterable?: Iterable<[K, V]>);
    clear(): void;
    delete(key: K): boolean;
    get(key: K): V;
    has(key: K): boolean;
    set(key: K, value: V): this;
    readonly [Symbol.toStringTag]: "WeakMap";
    deleteValue(value: V): boolean;
    getKey(value: V): K;
    hasValue(value: V): boolean;
}
