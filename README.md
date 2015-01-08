# lodash-node v3.0.0-pre

[Lo-Dash](https://lodash.com/) methods exported as [Node.js](http://nodejs.org/) modules generated by [lodash-cli](https://www.npmjs.com/package/lodash-cli).

## Deprecated

The `lodash-node` package is deprecated in favor of [lodash](https://www.npmjs.com/package/lodash) & [lodash-compat](https://www.npmjs.com/package/lodash-compat) ≥ v3.0.0.

## Installation & usage

Using npm:

```bash
npm i --save lodash-node

{sudo} npm i -g lodash-node
npm ln lodash-node
```

In Node.js:

```js
var _ = require('lodash-node');

// or as Underscore
var _ = require('lodash-node/underscore');

// or by method category
var arrays = require('lodash-node/modern/arrays');

// or individual methods
var at = require('lodash-node/modern/arrays/at');
var clone = require('lodash-node/underscore/objects/clone');
```
