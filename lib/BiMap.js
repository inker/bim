"use strict";
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var BiMap = /** @class */ (function () {
    function BiMap(iterable) {
        this.left = new Map(iterable);
        this.right = new Map();
        try {
            for (var _a = __values(this.left), _b = _a.next(); !_b.done; _b = _a.next()) {
                var _c = __read(_b.value, 2), k = _c[0], v = _c[1];
                this.right.set(v, k);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_d = _a.return)) _d.call(_a);
            }
            finally { if (e_1) throw e_1.error; }
        }
        var e_1, _d;
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
        var _a = this, left = _a.left, right = _a.right;
        var oldVal = left.get(key);
        var oldKey = right.get(value);
        if (left.has(key)) {
            right.delete(oldVal);
        }
        if (right.has(value)) {
            left.delete(oldKey);
        }
        left.set(key, value);
        right.set(value, key);
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
exports.default = BiMap;
//# sourceMappingURL=BiMap.js.map