"use strict";
var BiMap = (function () {
    function BiMap(iterable) {
        var _this = this;
        this.left = new Map(iterable);
        this.right = new Map();
        this.left.forEach(function (i) { return _this.right.set(i); });
    }
    BiMap.prototype.clear = function () {
        this.left.clear();
        this.right.clear();
    };
    BiMap.prototype.delete = function (key) {
        var val = this.left.get(key);
        if (!this.right.has(val)) {
            return false;
        }
        this.right.delete(val);
        return this.left.delete(key);
    };
    BiMap.prototype.entries = function () {
        return this.left.entries();
    };
    BiMap.prototype.forEach = function (callbackfn, thisArg) {
        this.left.forEach(callbackfn, thisArg);
    };
    BiMap.prototype.get = function (key) {
        return this.left.get(key);
    };
    BiMap.prototype.has = function (key) {
        return this.left.has(key);
    };
    BiMap.prototype.keys = function () {
        return this.left.keys();
    };
    BiMap.prototype.set = function (key, value) {
        var oldVal = this.left.get(key);
        var oldKey = this.right.get(value);
        if (this.left.has(key)) {
            this.right.delete(oldVal);
        }
        if (this.right.has(value)) {
            this.left.delete(oldKey);
        }
        this.left.set(key, value);
        this.right.set(value, key);
        return this;
    };
    Object.defineProperty(BiMap.prototype, "size", {
        get: function () {
            return this.left.size;
        },
        enumerable: true,
        configurable: true
    });
    BiMap.prototype.values = function () {
        return this.left.values();
    };
    BiMap.prototype[Symbol.iterator] = function () {
        return this.left[Symbol.iterator]();
    };
    Object.defineProperty(BiMap.prototype, Symbol.toStringTag, {
        get: function () {
            return this.left[Symbol.toStringTag];
        },
        enumerable: true,
        configurable: true
    });
    BiMap.prototype.deleteValue = function (value) {
        var key = this.right.get(value);
        if (!this.left.has(key)) {
            return false;
        }
        this.left.delete(key);
        return this.right.delete(value);
    };
    BiMap.prototype.getKey = function (value) {
        return this.right.get(value);
    };
    BiMap.prototype.hasValue = function (value) {
        return this.right.has(value);
    };
    return BiMap;
}());
exports.BiMap = BiMap;
var WeakBiMap = (function () {
    function WeakBiMap(iterable) {
        this.left = new WeakMap();
        this.right = new WeakMap();
        if (iterable === undefined)
            return;
        for (var _i = 0, _a = iterable; _i < _a.length; _i++) {
            var _b = _a[_i], k = _b[0], v = _b[1];
            this.left.set(k, v);
            this.right.set(v, k);
        }
    }
    WeakBiMap.prototype.clear = function () {
        console.error('method clear is deprecated');
    };
    WeakBiMap.prototype.delete = function (key) {
        var val = this.left.get(key);
        if (!this.right.has(val)) {
            return false;
        }
        this.right.delete(val);
        return this.left.delete(key);
    };
    WeakBiMap.prototype.get = function (key) {
        return this.left.get(key);
    };
    WeakBiMap.prototype.has = function (key) {
        return this.left.has(key);
    };
    WeakBiMap.prototype.set = function (key, value) {
        var oldVal = this.left.get(key);
        var oldKey = this.right.get(value);
        if (this.left.has(key)) {
            this.right.delete(oldVal);
        }
        if (this.right.has(value)) {
            this.left.delete(oldKey);
        }
        this.left.set(key, value);
        this.right.set(value, key);
        return this;
    };
    Object.defineProperty(WeakBiMap.prototype, Symbol.toStringTag, {
        get: function () {
            return this.left[Symbol.toStringTag];
        },
        enumerable: true,
        configurable: true
    });
    WeakBiMap.prototype.deleteValue = function (value) {
        var key = this.right.get(value);
        if (!this.left.has(key)) {
            return false;
        }
        this.left.delete(key);
        return this.right.delete(value);
    };
    WeakBiMap.prototype.getKey = function (value) {
        return this.right.get(value);
    };
    WeakBiMap.prototype.hasValue = function (value) {
        return this.right.has(value);
    };
    return WeakBiMap;
}());
exports.WeakBiMap = WeakBiMap;
