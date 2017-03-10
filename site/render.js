const Handlebars = require('handlebars')
const fs = require('fs')
const glob = require('glob')
const path = require('path')
const datIcons = require('dat-icons')

const partials = [
  'buttons', 'colors', 'elements', 'forms',
  'forms', 'icons', 'links', 'logo', 'progress',
  'transitions', 'typography'
]

const colorsScss = fs.readFileSync(__dirname + '/../scss/variables/colors.scss', 'utf8')

// Resolve icon IDs (same as filenames)
const icons = filenames(glob.sync(moduleDir('dat-icons') + '/icons/*.svg'), '.svg')

// Register partials
partials.forEach(function (name) {
  Handlebars.registerPartial(name, readTemplate(name))
})

// Register SVG partial
Handlebars.registerPartial('datIcons', datIcons())

// Compile root template
const index = Handlebars.compile(readTemplate('index'))

// Render root template
fs.writeFileSync(path.join(__dirname, '../dist/index.html'), index({
  colors: parseColorVars(colorsScss),
  icons: icons
}))

function readTemplate (name) {
  return fs.readFileSync(__dirname + '/templates/' + name + '.hbs', 'utf8')
}

function filenames (files, ext) {
  return files.map(function (name) {
    return path.basename(name, ext)
  })
}

// Resolve base directory of locally installed module
function moduleDir (name) {
  return path.dirname(require.resolve(name))
}

function parseColorVars (scss) {
  return scss.split('\n').reduce(function(acc, line){
    if(!line) {
      return acc
    }
    const pair = line.split(':')
    acc.push({
      varName: pair[0].trim(),
      color: pair[1].trim().slice(0, -1)
    })
    return acc
  }, [])
}
