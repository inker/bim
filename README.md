# bim

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Dependency status][david-dm-image]][david-dm-url] [![Dev Dependency status][david-dm-dev-image]][david-dm-dev-url]

A bidirectional map based on the ES6 Map object containing additional methods to retrive keys by values, delete key-value pairs by values and check the existence of keys by values. The module contains two classes: `BiMap` & `WeakBiMap` based on `Map` & `WeakMap` respectively. 

## Installation
```
npm install --save bim
```

## Usage
Same as normal `Map` & `WeakMap`, plus the `getKey`, `hasValue` & `deleteValue` methods.
```javascript
import { WeakBiMap } from 'bim'

// create objects to use as keys
const a = {
  i: 'foo',
  j: 8,
}
const b = {
  k: 'bar',
  p: 11,
}

// create the bidirectional weak map
const wbm = new WeakBiMap()

wbm.set(a, 5)
wbm.set(b, 6)
wbm.deleteValue(5) // now only has { k: 'bar', p: 11 } => 6
wbm.hasValue(5) // false

const c = {
  h: 'quux',
  z: 100,
}

wbm.set(c, 7)
wbm.hasValue(7) // true
wbm.getKey(7) // { h: 'quux', z: 100 }
```

[npm-url]: https://npmjs.org/package/bim
[downloads-image]: http://img.shields.io/npm/dm/bim.svg
[npm-image]: http://img.shields.io/npm/v/bim.svg
[david-dm-url]:https://david-dm.org/inker/bim
[david-dm-image]:https://david-dm.org/inker/bim.svg
[david-dm-dev-url]:https://david-dm.org/inker/bim#info=devDependencies
[david-dm-dev-image]:https://david-dm.org/inker/bim/dev-status.svg
