const yo = require('yo-yo')

module.exports = function () {
  return yo`
  <div class="sg-section">
    <h2>Dat Form Elements</h2>
    <h3 class="hd-xxs sg-label">Dat Link Input</h3>
    <div class="sg-subsection">
      <div class="sg-example">
        <div class="dat-import">
          <div class="dat-import--icon">
            <img src="./public/img/link.svg" />
          </div>
          <input type="text" placeholder="datlinks go here" class="dat-import--input">
        </div>
        <p class="sg-meta">
          This is used on green top bars.
        </p>
      </div>
    </div>
  </div>
  `
}
