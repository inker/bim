"use strict";
var Bim = (function () {
    function Bim(iterable) {
        this.left = new Map(iterable);
        this.right = new Map();
        this.left.forEach(this.right.set);
    }
    Bim.prototype.clear = function () {
        this.left.clear();
        this.right.clear();
    };
    Bim.prototype.delete = function (key) {
        var val = this.left.get(key);
        if (!this.right.has(val)) {
            return false;
        }
        this.right.delete(val);
        return this.left.delete(key);
    };
    Bim.prototype.entries = function () {
        return this.left.entries();
    };
    Bim.prototype.forEach = function (callbackfn, thisArg) {
        this.left.forEach(callbackfn, thisArg);
    };
    Bim.prototype.get = function (key) {
        return this.left.get(key);
    };
    Bim.prototype.has = function (key) {
        return this.left.has(key);
    };
    Bim.prototype.keys = function () {
        return this.left.keys();
    };
    Bim.prototype.set = function (key, value) {
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
    Object.defineProperty(Bim.prototype, "size", {
        get: function () {
            return this.left.size;
        },
        enumerable: true,
        configurable: true
    });
    Bim.prototype.values = function () {
        return this.left.values();
    };
    Bim.prototype[Symbol.iterator] = function () {
        return this.left[Symbol.iterator]();
    };
    Object.defineProperty(Bim.prototype, Symbol.toStringTag, {
        get: function () {
            return this.left[Symbol.toStringTag];
        },
        enumerable: true,
        configurable: true
    });
    Bim.prototype.deleteValue = function (value) {
        var key = this.right.get(value);
        if (!this.left.has(key)) {
            return false;
        }
        this.left.delete(key);
        return this.right.delete(value);
    };
    Bim.prototype.getKey = function (value) {
        return this.right.get(value);
    };
    Bim.prototype.hasValue = function (value) {
        return this.right.has(value);
    };
    return Bim;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Bim;