export default class WeakBiMap<K extends object, V extends object> implements WeakMap<K, V> {
    private left;
    private right;
    constructor(iterable?: Iterable<[K, V]>);
    clear(): void;
    delete(key: K): boolean;
    get(key: K): V | undefined;
    has(key: K): boolean;
    set(key: K, value: V): this;
    readonly [Symbol.toStringTag]: "WeakMap";
    deleteValue(value: V): boolean;
    getKey(value: V): K | undefined;
    hasValue(value: V): boolean;
}
