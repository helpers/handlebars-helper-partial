/*!
 * handlebars-helper-partial <https://github.com/helpers/handlebars-helper-partial>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

/* deps:mocha */
var assert = require('assert');
var should = require('should');
var helper = require('./');
var Template = require('template');
var handlebars;
var template;

describe('handlebars', function () {
  beforeEach(function () {
    handlebars = require('handlebars');
    handlebars.registerHelper('partial', helper(handlebars));
    handlebars.registerPartial('button', 'Click me!{{text}}after');
    handlebars.registerPartial('outter', 'Click me!{{> inner }}after');
    handlebars.registerPartial('inner', 'Click me!{{zzz}}after');
  });

  it('should work as a handlebars helper:', function () {
    var ctx = {text: ' __button__ '};
    handlebars.compile('{{partial "button"}}')(ctx).should.eql('Click me! __button__ after');
  });

  it('should allow context to be passed:', function () {
    var ctx = {a: {b: {c: {text: 'DDD'}}}};
    handlebars.compile('{{partial "button" a.b.c}}')(ctx).should.eql('Click me!DDDafter');
  });

  it('should work with other partials:', function () {
    var ctx = {zzz: ' __ZZZ__ '};
    handlebars.compile('{{partial "outter"}}')(ctx).should.eql('Click me!Click me! __ZZZ__ afterafter');
  });
});

describe('Template', function () {
  beforeEach(function () {
    template = new Template();
    handlebars = require('engine-handlebars');

    template.engine('hbs', handlebars);
    template.helper('partial', helper(handlebars));

    template.partial('button.hbs', 'Click me!{{text}}after');
    template.data({text: ' __BAR__ '})
  });

  it('should work with Template:', function (done) {
    template.render('{{partial "button.hbs"}}', {ext: 'hbs'}, function (err, content) {
      if (err) console.log(err)
      content.should.eql('Click me! __BAR__ after');
    });
    done();
  });
});
