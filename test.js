/*!
 * helper-partial <https://github.com/helpers/helper-partial>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

/* deps:mocha */
var assert = require('assert');
var should = require('should');
var helper = require('./');

var handlebars = require('handlebars');

describe('partial: async', function () {
  it('should work as a handlebars helper:', function () {
    handlebars.registerHelper('partial', helper(handlebars));

    handlebars.registerPartial('aaa', 'A. before{{foo}}after');
    handlebars.registerPartial('bbb', 'B. before{{foo}}after');
    handlebars.registerPartial('ccc', 'C. before{{foo}}after');

    var a = handlebars.compile('{{partial "aaa"}}');
    a({foo: ' __aaa__ '}).should.eql('A. before __aaa__ after');

    var b = handlebars.compile('{{partial "bbb"}}');
    b({foo: ' __bbb__ '}).should.eql('B. before __bbb__ after');

    var c = handlebars.compile('{{partial "ccc"}}');
    c({foo: ' __ccc__ '}).should.eql('C. before __ccc__ after');
  });
});
