# dat-design

[![Join the chat at https://gitter.im/datproject/design](https://badges.gitter.im/datproject/design.svg)](https://gitter.im/datproject/design?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
design resources and assets for the [dat project](http://dat-data.com)

to build and/or develop on this module:
```
npm install
npm run watch-css
open index.html
```

## api for importing (s)css assets into other projects
from your project's root directory (assuming you're using [npm](http://npmjs.com)):
```
npm install dat-design --save
```
from here you have the following choices for including individual .css files in your project:

#### vanilla link
the simplest way to include this module in another project. just include the stylesheet you want in your html as you would any other stylesheet:
```
<link type="text/css" rel="stylesheet" href="./../node_modules/dat-design/css/base.css">
```
#### vanilla @import:
not recommended for production, but will get you working quickly. from within a css file in your project, include a relative path to the file you want to include from this repo, which is now in your project's `nodule_modules` directory:
```
@import './../node_modules/dat-design/public/css/base.css';
```

## see something missing?

If some dat project is in need of a new design element or concept please open an issue!

