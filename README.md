# dat-design

[![Join the chat at https://gitter.im/datproject/design](https://badges.gitter.im/datproject/design.svg)](https://gitter.im/datproject/design?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
design resources and assets for the [dat project](http://dat-data.com)

```
npm install
npm run watch-css
open index.html
```

## api for importing (s)css assets into other projects
### vanilla:
the simplest way to include this module in another project. this method isn't very efficient and is not recommended for production. it'll get you going quickly and easily, though. from your project's root directory (assuming you're using npm):
```
npm install dat-design --save
```
and then from within a css file in your project, include a relative path to the file you want to include from this repo, which is now in your project's `nodule_modules` directory:
```
@import './../node_modules/dat-design/public/css/base.css';
```

## see something missing?

If some dat project is in need of a new design element or concept please open an issue!

