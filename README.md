# dat-design

[![Join the chat at https://gitter.im/datproject/design](https://badges.gitter.im/datproject/design.svg)](https://gitter.im/datproject/design?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
design resources and assets for the [dat project](http://dat-data.com)

to build and/or develop on this module:

```shell
npm install
npm run watch-css
open index.html
```

to build svg sprite:

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
use the [https://www.npmjs.com/package/node-sass-magic-importer](magic importer npm module) with node-sass.

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

### How to use dat (S)CSS in your project

#### Reset

Dat-design imports a CSS reset ([https://necolas.github.io/normalize.css/](normalize)).

#### Variables

Dat-design comes with [https://github.com/datproject/design/tree/master/scss/variables](variables) for colors and transitions that you should use in your project to ensure visual consistency between dat-related projects.

#### CSS classes

Dat-design includes a toolkit of utility classes ([https://github.com/basscss/basscss](basscss)). Refer to the [http://www.basscss.com/](basscss documentation) on how to use them.
There’s also a set of custom classes for dat-specific components, like buttons or loaders. Those components are documented in the [http://datproject.github.io/design/](dat styleguide).

### SVG Icon sprite

[work in progress] There’s a set of dat-specific icons that are stored in an optimized svg sprite. Include this sprite in your layout file, and the icons can be accessed like this:

```html
<svg class="daticon">
  <use xlink:href="#daticon-name-of-icon"></use>
</svg>
```

#### Image Assets

Dat-design comes with re-usable image assets, such as logos and svg icons.

## Is something missing?

If some dat project is in need of a new design element or concept please open an issue!
