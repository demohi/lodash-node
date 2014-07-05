# lodash-node v3.0.0-pre

[Lo-Dash](https://lodash.com/) methods exported as [Node.js](http://nodejs.org/)/[io.js](https://iojs.org/) modules.

Generated using [lodash-cli](https://www.npmjs.com/package/lodash-cli):
```bash
$ lodash modularize exports=node -o ./compat
$ lodash modularize modern exports=node -o ./modern
```

## Deprecated

The `lodash-node` package is deprecated in favor of [lodash](https://www.npmjs.com/package/lodash) & [lodash-compat](https://www.npmjs.com/package/lodash-compat) ≥ v3.0.0.

## Installation

Using npm:

```bash
$ npm i --save lodash-node

$ {sudo -H} npm i -g lodash-node
$ npm ln lodash-node
```

In Node.js/io.js:

```js
// the modern build
var _ = require('lodash-node');

// or the compatibility build
var _ = require('lodash-node/compat');

// or by method category
var array = require('lodash-node/modern/array');

// or by individual methods
var chunk = require('lodash-node/compat/array/chunk');
var clone = require('lodash-node/modern/object/clone');
```
