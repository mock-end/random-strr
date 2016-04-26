# random-strr

> Return a random string.


[![MIT License](https://img.shields.io/badge/license-MIT_License-green.svg?style=flat-square)](https://github.com/mock-end/random-strr/blob/master/LICENSE)
  
[![build:?](https://img.shields.io/travis/mock-end/random-strr/master.svg?style=flat-square)](https://travis-ci.org/mock-end/random-strr)
[![coverage:?](https://img.shields.io/coveralls/mock-end/random-strr/master.svg?style=flat-square)](https://coveralls.io/github/mock-end/random-strr)
  
  
## Install
  
```
$ npm install --save random-strr 
```
  
## Usage
  
```js
var randomString = require('random-strr');
  
// API
// - randomString([options]);
  
// options
// - pool
// - length
// - min
// - max
```
By default it will return a string with random length of `5-20` characters and will contain any of the following characters.

```js
'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789~!@#$%^&()*_+-={}[]'
```

Can optionally specify a length and the string will be exactly that length:

```js
randomString({ length: 5 });
// => 'YN%fG'
```

Can optionally specify min, max, or both to limit the range.

```js
randomString({ min: 8 });
// => huepevesik

randomString({ max: 10 });
// => biwuwkef

randomString({ min: 10, max: 40 });
// => omoemowawahteze
```

Can optionally specify a pool and the string will be generated with characters only from that pool.

```js
randomString({ pool: 'abcde' });
// => 'cccdeeabedebb'
```

Of course these options can be combined.

```js
randomString({ length: 5, pool: 'abcde' });
=> 'cbbdc'
```
  
## Related

- [random-integral](https://github.com/mock-end/random-integral) - Return a random integer.
- [random-natural](https://github.com/mock-end/random-natural) - Return a random natural number.
- [random-decimal](https://github.com/mock-end/random-decimal) - Return a random decimal.
- [random-floating](https://github.com/mock-end/random-floating) - Return a random floating point number.
- [random-index](https://github.com/mock-end/random-index) - Return a random array-like index.
- [random-binary](https://github.com/mock-end/random-binary) - Return a random binary number.
- [random-octal](https://github.com/mock-end/random-octal) - Return a random octal number.
- [random-hexadecimal](https://github.com/mock-end/random-hexadecimal) - Return a random hexadecimal number.
- [random-unicode](https://github.com/mock-end/random-unicode) - Return a random unicode. 
- [random-bool](https://github.com/mock-end/random-bool) - Return a random boolean (true/false).
- [random-char](https://github.com/mock-end/random-char) - Return a random char.
  

## Contributing
  
Pull requests and stars are highly welcome.

For bugs and feature requests, please [create an issue](https://github.com/mock-end/random-strr/issues/new).
