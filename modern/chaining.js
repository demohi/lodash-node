/**
 * Lo-Dash 2.0.0 (Custom Build) <http://lodash.com/>
 * Build: `lodash modern modularize exports="node" -o ./modern/`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */

module.exports = {
  'chain': require('./chaining/chain'),
  'tap': require('./chaining/tap'),
  'wrapperChain': require('./chaining/wrapperChain'),
  'wrapperToString': require('./chaining/wrapperToString'),
  'wrapperValueOf': require('./chaining/wrapperValueOf')
};