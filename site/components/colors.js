const yo = require('yo-yo')
const fs = require('fs')

const colorsScss = fs.readFileSync('../scss/variables/colors.scss', 'utf8')

function parse (scss) {
  return scss.split('\n').reduce(function(obj, line){
    if(!line) {
      return obj
    }
    const pair = line.split(':')
    const key = pair[0].trim()
    const value = pair[1].trim().slice(0, -1)
    obj[key] = value
    return obj
  }, {})
}

const colors = parse(colorsScss)

module.exports = function () {
  return yo`
  <div class="sg-section">
    <h2>Dat Palette</h2>
    <h3 class="hd-xxs sg-label">Neutral Color Shades</h3>
    <div class="sg-subsection">
      <div class="color-blocks">
        <div class="color-block--neutral">
        </div>
        <div class="color-block--neutral--90">
        </div>
        <div class="color-block--neutral--70">
        </div>
        <div class="color-block--neutral--50">
        </div>
        <div class="color-block--neutral--30">
        </div>
        <div class="color-block--neutral--10">
        </div>
      </div>
      <p>
        Use the dark blue for all text. Also use this color and its various shades for form elements, borders and other neutral elements.
      </p>
    </div>
    <h3 class="hd-xxs sg-label">Brand Color</h3>
    <div class="sg-subsection">
      <div class="color-blocks">
        <div class="color-block--green">
        </div>
      </div>
      <p>
        Dat Green is the brand color and is used in the logo. It’s also the default color for links and important buttons.
      </p>
    </div>
    <h3 class="hd-xxs sg-label">UI and Highlight Colors</h3>
    <div class="sg-subsection">
      <div class="color-blocks">
        <div class="color-block--info">
        </div>
        <div class="color-block--danger">
        </div>
        <div class="color-block--warning">
        </div>
      </div>
      <p>
        Use blue, red and yellow for UI purposes like warnings, errors, notifications etc. These colors can also be used for decorative purposes.
      </p>
    </div>
    <h3 class="hd-xxs sg-label">Complete List of Colors</h3>
    <div class="sg-subsection">
      <ul>
        ${Object.keys(colors).map(function(scssVar){
          const hex = colors[scssVar]
          return yo`
            <li>
              <span style="background-color: ${hex}; width: 10px; height: 10px; display: inline-block;"></span>
              ${hex} ${scssVar}
            </li>
          `
        })}
      </ul>
    </div>
  </div>
  `
}
