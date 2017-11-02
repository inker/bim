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
var WeakBiMap = /** @class */ (function () {
    function WeakBiMap(iterable) {
        this.left = new WeakMap();
        this.right = new WeakMap();
        if (iterable === undefined) {
            return;
        }
        try {
            for (var iterable_1 = __values(iterable), iterable_1_1 = iterable_1.next(); !iterable_1_1.done; iterable_1_1 = iterable_1.next()) {
                var _a = __read(iterable_1_1.value, 2), k = _a[0], v = _a[1];
                this.left.set(k, v);
                this.right.set(v, k);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (iterable_1_1 && !iterable_1_1.done && (_b = iterable_1.return)) _b.call(iterable_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        var e_1, _b;
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
exports.default = WeakBiMap;
//# sourceMappingURL=WeakBiMap.js.map