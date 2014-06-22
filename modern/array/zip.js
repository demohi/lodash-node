/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="node" -o ./modern/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var isObject = require('../object/isObject'),
    max = require('../collection/max'),
    pluck = require('../collection/pluck');

/**
 * Creates an array of grouped elements, the first of which contains the first
 * elements of the given arrays, the second of which contains the second elements
 * of the given arrays, and so on. If a zipped value is provided its corresponding
 * unzipped value is returned.
 *
 * @static
 * @memberOf _
 * @alias unzip
 * @category Array
 * @param {...Array} [arrays] The arrays to process.
 * @returns {Array} Returns the array of grouped elements.
 * @example
 *
 * _.zip(['fred', 'barney'], [30, 40], [true, false]);
 * // => [['fred', 30, true], ['barney', 40, false]]
 *
 * _.unzip([['fred', 30, true], ['barney', 40, false]]);
 * // => [['fred', 'barney'], [30, 40], [true, false]]
 */
function zip() {
  var array = arguments.length > 1 ? arguments : arguments[0],
      index = -1,
      length = isObject(length = max(array, 'length')) && length.length || 0,
      result = Array(length);

  while (++index < length) {
    result[index] = pluck(array, index);
  }
  return result;
}

module.exports = zip;