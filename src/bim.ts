/// <reference path="../typings/tsd.d.ts" />;

export default class Bim<K, V> implements Map<K, V> {
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

    [Symbol.iterator]():IterableIterator<[K,V]> {
        return this.left[Symbol.iterator]();
    }

    get [Symbol.toStringTag](): string {
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

// function generateId(collision?: (temp: string) => boolean) {
//     const id = Math.random().toString(36).slice(2);
//     return collision !== undefined && collision(id) ? generateId(collision) : id;  
// }

// export class WeakBiMap<K, V> implements WeakMap<K, V> {
//     private keyUids = new Set<string>();
//     private valUids = new Set<string>();

//     constructor(iterable?: Iterable<[K, V]>) {
//         if (iterable === undefined) return;
//         for (let [k, v] of iterable as any) {
//             this.set(k, v);
//         }
//     }

//     private getHiddenProperty(obj: any): string {
//         for (let prop of Object.keys(obj).filter(k => k[0] === '_')) {
//             if (this.keyUids.has(prop)) {
//                 return prop;
//             }
//         }
//         return undefined;
//     }

//     clear(): void {
//         console.error('method clear is deprecated');
//     }

//     delete(key: K): boolean {
//         const hiddenProp = this.getHiddenProperty(key);
//         if (hiddenProp === undefined) {
//             return false;
//         }
//         key[hiddenProp] = undefined;
//         this.keyUids.delete(hiddenProp);
//         return true;
//     }

//     get(key: K): V {
//         return key[this.getHiddenProperty(key)];
//     }

//     has(key: K): boolean {
//         return this.keyUids.has(this.getHiddenProperty(key));
//     }

//     set(key: K, value: V): this {
//         const keyId = '_' + generateId(id => this.keyUids.has('_' + id) || id in key);
//         Object.defineProperty(key, keyId, { value });
//         this.keyUids.add(keyId);
//         const valId = '_' + generateId(id => this.valUids.has('_' + id) || id in value);
//         Object.defineProperty(value, valId, { key });
//         this.keyUids.add(keyId);        
//         return this;    
//     }

//     get [Symbol.toStringTag](): string {
//         return {}[Symbol.toStringTag];
//     }

//     deleteValue(value: V) {
//         const key = this.right.get(value);
//         if (!this.left.has(key)) {
//             return false;
//         }
//         this.left.delete(key);
//         return this.right.delete(value);        
//     }

//     getKey(value: V) {
//         return this.right.get(value);
//     }

//     hasValue(value: V) {
//         return this.right.has(value);
//     }

// }