# dat-design

[![Join the chat at https://gitter.im/datproject/design](https://badges.gitter.im/datproject/design.svg)](https://gitter.im/datproject/design?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

design resources and assets for the [dat project](http://dat-data.com)

to build and/or develop on this module:

```shell
npm install
npm run watch-css
open index.html
```

to build SVG sprite:

```shell
npm run build-icons
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
@import "~dat-design/responsive/breakpoints.scss"
```

node-sass-magic-importer offers lots of other options in addition to these as well. do note that the magic importer is still under active development.

### How To Use Dat (S)CSS in Your Project

By importing dat-design in your projects (s)css, you’ll get the following:

#### Reset

Dat-design uses [Normalize](https://necolas.github.io/normalize.css/), which makes browsers render all elements more consistently.

#### Variables

The SCSS version of dat-design provides you with [variables](https://github.com/datproject/design/tree/master/scss/variables) for colors and transitions which you should use in your project to ensure visual consistency between dat-related projects. Refer to the [Dat Styleguide](http://datproject.github.io/design/) to understand how.

#### Utility classes

Dat-design includes a toolkit of utility classes ([Basscss](https://github.com/basscss/basscss)). Refer to the [Basscss Documentation](http://www.basscss.com/) on how to use them.

#### Dat classes

There’s also a set of custom classes for dat-specific components, like buttons or loaders. Those components are documented in the [Dat Styleguide](http://datproject.github.io/design/).

## How To Use Dat Icons in Your Project (work in progress)

The dat-design package comes with a set of dat-specific icons. All available icons are documented in the [Dat Styleguide](http://datproject.github.io/design/).

### Inlining SVG

By inlining the SVG code, you’ll be able to style the contents of the SVG. Just copy the code of an individual icon file and insert it in your template like:

```html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240"><title>Title of this svg</title><path d="M76 120a12 12 0 0 0 12 12h64a12 12 0 0 0 0-24H88a12 12 0 0 0-12 12z"/><path d="M35 120a35 35 0 0 1 35-35h38V65H70a55 55 0 0 0 0 110h38v-20H70a35 35 0 0 1-35-35zm135-55h-38v20h38a35 35 0 1 1 0 70h-38v20h38a55 55 0 0 0 0-110z"/></svg>
```

### SVG Sprite + `<use>`
A more performant and convenient way of inlining SVG icons is to do so via referencing them from an icon sprite. An optimized sprite is included in this package (``./../node_modules/dat-design/public/svg/sprite.svg`). Include this sprite in your layout file, and the individual icons can be referenced like this:

```html
<svg class="daticon">
  <use xlink:href="#daticon-edit-dat"></use>
</svg>
```

### External SVG Sprite (won’t work in lte IE 11)
Instead of including the sprite in your layout file, you can link to it as an external resource. Note that this is only supported in the latest browsers, IE 11 not included.

```html
<svg class="daticon">
  <use xlink:href="public/svg/sprite.svg#daticon-edit-dat"></use>
</svg>
```

#### Logo Assets

Dat-design comes with ready-to-use logo assets, such as logos and SVG icons in `./../node_modules/dat-design/public`.

## Is something missing?

If some dat project is in need of a new design element or concept please open an issue!
