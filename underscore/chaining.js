/**
 * Lo-Dash 2.3.0 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize underscore exports="node" -o ./underscore/`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */

module.exports = {
  'chain': require('./chaining/chain'),
  'tap': require('./chaining/tap'),
  'value': require('./chaining/wrapperValueOf'),
  'wrapperChain': require('./chaining/wrapperChain'),
  'wrapperValueOf': require('./chaining/wrapperValueOf')
};
