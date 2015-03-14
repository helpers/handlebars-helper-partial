/*!
 * handlebars-helper-partial <https://github.com/helpers/handlebars-helper-partial>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var merge = require('mixin-deep');

module.exports = function (engine) {
  var partials = engine.partials;

  return function (name, context) {
    if (typeof name !== 'string') return '';
    var partial = partials[name];

    var fn = engine.compile(partial);
    return fn(merge(this, context));
  };
};
