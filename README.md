# raxios
[![npm](https://img.shields.io/npm/v/raxios.svg)](https://www.npmjs.com/package/raxios)
[![npm](https://img.shields.io/npm/dt/raxios.svg)](https://www.npmjs.com/package/raxios)

Raxios is a wrapper of axios extending some functionallity of url pattern matching used in express library.

## Installation
```
npm install --save raxios
```

## Usage

```javascript
import raxios from 'raxios'

raxios.get('http://myapi.com/:foo/search', {
  urlParams: {
    foo: 'bar'
  }
}).then(res => console.log(res.data))
```

This will produce a request to http://myapi.com/bar/search

### Usage with query params
```javascript
import raxios from 'raxios'

raxios.get('http://myapi.com/:foo/search', {
  urlParams: {
    foo: 'bar'
  },
  params: {
    q: 'soccer'
  }
}).then(res => console.log(res.data))
```

This will produce a request to http://myapi.com/bar/search?q=soccer
