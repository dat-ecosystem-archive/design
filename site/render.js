const yo = require('yo-yo')
const fs = require('fs')
const root = require('./components/index')

fs.writeFileSync('./index.html', '<!doctype html>\n' + root())
