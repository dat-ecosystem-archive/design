# dat-design

[![NPM version][npm-image]][npm-url]
[![Join the chat at https://gitter.im/datproject/design](https://badges.gitter.im/datproject/design.svg)](https://gitter.im/datproject/design?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

design resources and assets for the [dat project](http://dat-data.com)

### License for Design Assets (non-code)

<p xmlns:dct="http://purl.org/dc/terms/" xmlns:vcard="http://www.w3.org/2001/vcard-rdf/3.0#">
  <a rel="license"
     href="http://creativecommons.org/publicdomain/zero/1.0/">
    <img src="http://i.creativecommons.org/p/zero/1.0/88x31.png" style="border-style: none;" alt="CC0" />
  </a>
  <br />
  To the extent possible under law,
  <a rel="dct:publisher"
     href="datproject.org">
    <span property="dct:title">Dat Project</span></a>
  has waived all copyright and related or neighboring rights to
  <span property="dct:title">Dat Design Assets</span>.
This work is published from:
<span property="vcard:Country" datatype="dct:ISO3166"
      content="US" about="datproject.org">
  United States</span>.
</p>

## Build and deploy documentation website

run `./scripts/build`

## Build and/or develop on this module:

```shell
npm install
npm run watch-css
npm run watch-site
open dist/index.html
```

## <a name="dat-design-api"></a>api for importing (s)css assets into other projects
from your project’s root directory (assuming you’re using [npm](http://npmjs.com)):

```shell
npm install dat-design --save
```

from here you have the following choices for including individual .css files in your project:

#### vanilla link
the simplest way to include this module in another project. just include the stylesheet you want in your html as you would any other stylesheet with a relative link. not recommended for use in production web apps because this would involve making your node_modules directory accessible from the web:

```html
<link type="text/css" rel="stylesheet" href="./../node_modules/dat-design/css/base.css">
```

#### vanilla @import:
from within a css file in your project, include a relative path to the file you want to include from this repo, which is now in your project’s `nodule_modules` directory. not recommended for use in production web apps without a build step that removes the @import, since @import is not performant on the fly.

```css
@import './../node_modules/dat-design/public/css/base.css';
```

#### node-sass-magic-importer:
Use the [magic importer npm module](https://www.npmjs.com/package/node-sass-magic-importer) with node-sass.

```shell
npm install node-sass-magic-importer --save-dev
```

when you set up node-sass to run in your package.json scripts, you can use the `--importer` option like so:

```json
"build-css": "node-sass --importer node_modules/node-sass-magic-importer src/scss/sample.scss public/css/sample.css"
```

now, from within your `sample.scss` file, you can `@import` this `dat-design` npm module with the following syntax:

```scss
@import "~dat-design";
```

if there's no file path specified after the `dat-design` module name (like above), the `@import` rule resolves to the file defined by this module's `style` property in the package.json. you can also point at individual files within this module from within the scss files in your project to use mixins and variables:

```scss
@import "~dat-design/base/buttons.scss"
```

node-sass-magic-importer offers lots of other options in addition to these as well.

### How To Use Dat (S)CSS in Your Project

By importing dat-design in your projects (s)css, you’ll get the following:

#### Reset

Dat-design uses [Normalize](https://necolas.github.io/normalize.css/), which makes browsers render all elements more consistently.

#### Variables

The SCSS version of dat-design provides you with [variables](https://github.com/datproject/design/tree/master/scss/variables) for colors and transitions which you should use in your project to ensure visual consistency between dat-related projects. Refer to the [Dat Styleguide](http://datproject.github.io/design/) to understand how.

#### Dat classes

There’s also a set of custom classes for dat-specific components, like buttons or loaders. Those components are documented in the [Dat Styleguide](http://datproject.github.io/design/).

#### Logo Assets

Dat-design comes with ready-to-use logo assets, in `./../node_modules/dat-design/public/img`.

## Is something missing?

If some dat project is in need of a new design element or concept please open an issue!


[npm-image]: https://img.shields.io/npm/v/dat-design.svg?style=flat-square
[npm-url]: https://npmjs.org/package/dat-design
