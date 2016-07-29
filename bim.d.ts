/// <reference path="./typings/lib.es6.d.ts" />
declare module "bim" {
    export class BiMap<K, V> {
        clear(): void;
        delete(key: K): boolean;
        entries(): IterableIterator<[K, V]>;
        forEach(callbackfn: (value: V, index: K, map: Map<K, V>) => void, thisArg?: any): void;
        get(key: K): V;
        has(key: K): boolean;
        keys(): IterableIterator<K>;
        set(key: K, value?: V): Map<K, V>;
        size: number;
        values(): IterableIterator<V>;
        [Symbol.iterator]():IterableIterator<[K,V]>;
        [Symbol.toStringTag]: string;
        deleteValue(value: V): boolean;
        getKey(value: V): K;
        hasValue(value: V): boolean;
    }

    export class WeakBiMap<K, V> {
        delete(key: K): boolean;
        get(key: K): V;
        has(key: K): boolean;
        set(key: K, value?: V): Map<K, V>;
        [Symbol.toStringTag]: string;
        deleteValue(value: V): boolean;
        getKey(value: V): K;
        hasValue(value: V): boolean;        
    }
}