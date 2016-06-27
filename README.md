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

## see something missing?

If some dat project is in need of a new design element or concept please open an issue!
