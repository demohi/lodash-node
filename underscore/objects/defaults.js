/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize underscore exports="node" -o ./underscore/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var indexTypes = require('../internals/indexTypes'),
    isObject = require('./isObject'),
    keys = require('./keys');

/**
 * Assigns own enumerable properties of source object(s) to the destination
 * object for all destination properties that resolve to `undefined`. Once a
 * property is set, additional defaults of the same property will be ignored.
 *
 * @static
 * @memberOf _
 * @category Objects
 * @param {Object} object The destination object.
 * @param {...Object} [source] The source objects.
 * @param- {Object} [guard] Allows working with `_.reduce` without using its
 *  `key` and `object` arguments as sources.
 * @returns {Object} Returns the destination object.
 * @example
 *
 * var object = { 'name': 'barney' };
 * _.defaults(object, { 'name': 'fred', 'employer': 'slate' });
 * // => { 'name': 'barney', 'employer': 'slate' }
 */
function defaults(object, source, guard) {
  if (!object) {
    return object;
  }
  var args = arguments,
      argsIndex = 0,
      argsLength = indexTypes[typeof guard] && args[3] && args[3][guard] === source ? 2 : args.length;

  while (++argsIndex < argsLength) {
    source = args[argsIndex];
    if (source) {
      for (var key in source) {
        if (typeof object[key] == 'undefined') {
          object[key] = source[key];
        }
      }
    }
  }
  return object;
}

module.exports = defaults;
