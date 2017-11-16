# raxios
Raxios is a wrapper of axios extending some functionallity of url pattern matching used in express library.

## Installation
```
npm install --save raxios
```

## Usage

```javascript
import raxios from 'raxios'

raxios.get('http://quote.foxbusiness.com/feed/profile/:ticker/json', {
  urlParams: {
    ticker: 'AAPL'
  }
}).then(res => console.log(res.data))
```

That will produce a request to http://quote.foxbusiness.com/feed/profile/AAPL/json
