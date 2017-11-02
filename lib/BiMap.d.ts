export default class BiMap<K, V> implements Map<K, V> {
    private left;
    private right;
    constructor(iterable?: Iterable<[K, V]>);
    clear(): void;
    delete(key: K): boolean;
    entries(): IterableIterator<[K, V]>;
    forEach(callbackfn: (value: V, index: K, map: Map<K, V>) => void, thisArg?: any): void;
    get(key: K): V | undefined;
    has(key: K): boolean;
    keys(): IterableIterator<K>;
    set(key: K, value: V): this;
    readonly size: number;
    values(): IterableIterator<V>;
    [Symbol.iterator](): IterableIterator<[K, V]>;
    readonly [Symbol.toStringTag]: "Map";
    deleteValue(value: V): boolean;
    getKey(value: V): K | undefined;
    hasValue(value: V): boolean;
}
