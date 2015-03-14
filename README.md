# handlebars-helper-partial [![NPM version](https://badge.fury.io/js/handlebars-helper-partial.svg)](http://badge.fury.io/js/handlebars-helper-partial)  [![Build Status](https://travis-ci.org/helpers/handlebars-helper-partial.svg)](https://travis-ci.org/helpers/handlebars-helper-partial) 

> Handlebars helper for rendering partials.

## Install with [npm](npmjs.org)

```bash
npm i handlebars-helper-partial --save
```

## Usage

```js
var helper = require('handlebars-helper-partial');
```

## Handlebars example

```js
var handlebars = require('handlebars');

// 1. pass your instance of handlebars
var helper = require('handlebars-helper-partial')(handlebars);

// 2. register the helper, name it whatever you want
handlebars.registerHelper('partial', helper);

// 3. register some partials
handlebars.registerPartial('button', '<button>{{text}}</button>');

// 4. use in templates
handlebars.compile('{{partial "button"}}')({text: 'Click me!'});
//=> '<button>Click me!</button>'
```

Pass a specific context to the partial:

```js
handlebars.compile('{{partial "button" a.b.c}}')({a: {b: c: {text: 'Click me!'}}});
//=> '<button>Click me!</button>'
```


## Related projects
* [handlebars-helpers](https://github.com/assemble/handlebars-helpers): 120+ Handlebars helpers in ~20 categories, for Assemble, YUI, Ghost or any Handlebars project. Includes helpers like {{i18}}, {{markdown}}, {{relative}}, {{extend}}, {{moment}}, and so on.
* [template-helpers](https://github.com/jonschlinkert/template-helpers): Generic JavaScript helpers that can be used with any template engine. Handlebars, Lo-Dash, Underscore, or any engine that supports helper functions.  

## Running tests
Install dev dependencies.

```bash
npm i -d && npm test
```

## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/helpers/handlebars-helper-partial/issues)

## Author

**Jon Schlinkert**
 
+ [github/jonschlinkert](https://github.com/jonschlinkert)
+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert) 

## License
Copyright (c) 2015 Jon Schlinkert  
Released under the MIT license

***

_This file was generated by [verb-cli](https://github.com/assemble/verb-cli) on March 13, 2015._