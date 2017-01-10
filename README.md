# bim
[![NPM version][npm-img]][npm-url]
[![Dependency Status][daviddm-img]][daviddm-url]
[![devDependency Status][daviddm-dev-img]][daviddm-dev-url]
A bidirectional map based on the ES6 Map object containing additional methods to retrive keys by values, delete key-value pairs by values and check the existence of keys by values. The module contains two classes: `BiMap` & `WeakBiMap` based on `Map` & `WeakMap` respectively. 

## Installation
```
npm install --save bim
```

## Usage
The same as normal `Map` & `WeakMap`, plus the `getKey`, `hasValue` & `deleteValue` methods.
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