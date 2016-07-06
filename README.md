# dat-design

[![Join the chat at https://gitter.im/datproject/design](https://badges.gitter.im/datproject/design.svg)](https://gitter.im/datproject/design?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
design resources and assets for the [dat project](http://dat-data.com)

to build and/or develop on this module:
```
npm install
npm run watch-css
open index.html
```

## <a name="dat-design-api"></a>api for importing (s)css assets into other projects
from your project’s root directory (assuming you’re using [npm](http://npmjs.com)):
```
npm install dat-design --save
```
from here you have the following choices for including individual .css files in your project:

#### vanilla link
the simplest way to include this module in another project. just include the stylesheet you want in your html as you would any other stylesheet with a relative link. not recommended for use in production web apps because this would involve making your node_modules directory accessible from the web:
```
<link type="text/css" rel="stylesheet" href="./../node_modules/dat-design/css/base.css">
```
#### vanilla @import:
from within a css file in your project, include a relative path to the file you want to include from this repo, which is now in your project’s `nodule_modules` directory. not recommended for use in production web apps without a build step that removes the @import, since @import is not performant on the fly.
```
@import './../node_modules/dat-design/public/css/base.css';
```
#### node-sass-magic-importer:
use the [https://www.npmjs.com/package/node-sass-magic-importer](magic importer npm module) with node-sass.
```
npm install node-sass-magic-importer --save-dev
```
when you set up node-sass to run in your package.json scripts, you can use the `--importer` option like so:
```
"build-css": "node-sass --importer node_modules/node-sass-magic-importer src/scss/sample.scss public/css/sample.css"
```
now, from within your `sample.scss` file, you can `@import` this `dat-design` npm module with the following syntax:
```
@import "~dat-design";
```
if there's no file path specified after the `dat-design` module name (like above), the `@import` rule resolves to the file defined by this module's `style` property in the package.json. you can also point at individual files within this module from within the scss files in your project to use mixins and variables:
```
@import "~dat-design/responsive/breakpoints.scss"
```
node-sass-magic-importer offers lots of other options in addition to these as well. do note that this module is still under active development.

## is something missing?

If some dat project is in need of a new design element or concept please open an issue!
