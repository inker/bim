# bim
A bidirectional map based on the ES6 Map object containing additional methods to retrive keys by values, delete key-value pairs by values and check the existence of keys by values.

## Installation
```
npm install bim
```

## Usage
```javascript
const bim = new Bim();
bim.set(5, "foo");
bim.set(6, "bar");
bim.get(6); // "bar"
bim.delete(6);
bim.set(1, "qux");
bim.getKey("qux");
bim.set(2, "aaa");
bim.set(1, "foo");
```