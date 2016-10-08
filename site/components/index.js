const yo = require('yo-yo')
const logo = require('./logo')
const colors = require('./colors')
const typography = require('./typography')
const elements = require('./elements')
const links = require('./links')
const buttons = require('./buttons')
const transitions = require('./transitions')
const progress = require('./progress')
const forms = require('./forms')
const icons = require('./icons')

module.exports = function () {
  return yo`
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>dat design</title>
    <link href='http://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700' rel='stylesheet'>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
    <link rel="icon" href="favicon.ico">
    <link rel="stylesheet" type="text/css" href="./css/styleguide.css">
  </head>
  <body>
    <header class="sg-header">
      <div class="sg-container">
        <h1>
          <img src="downloads/dat-hexagon.svg" style="width: 34px;">
          dat <span>design</span>
        </h1>
      </div>
    </header>
    <main class="sg-main">
      <div class="sg-container">
        <div class="sg-section">
          <p>
            This is the style guide for <a href="http://dat-data.com/">Dat</a>, an open source, decentralized data tool for distributing datasets. This styleguide provides general design guidance for dat projects, and also comes with an <a href="https://github.com/datproject/design#dat-design-api">API</a> for importing (s)css assets into your projects. If some dat project is in need of a new design element or concept please <a href="https://github.com/datproject/design/issues">open an issue</a>.
          </p>
        </div>
        ${logo()}
        ${colors()}
        ${typography()}
        ${elements()}
        ${links()}
        ${buttons()}
        ${transitions()}
        ${progress()}
        ${forms()}
        ${icons()}
      </div>
    </main>
  </body>
</html>
  `
}
