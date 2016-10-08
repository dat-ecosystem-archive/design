const yo = require('yo-yo')

module.exports = function () {
  return yo`
  <div class="sg-section">
    <h2>Dat Progress Bar</h2>
    <h3 class="hd-xxs sg-label">Progress Bar</h3>
    <div class="sg-subsection">
      <div class="sg-example">
        <div class="progress">
          <div class="progress__counter">
            70%
          </div>
          <div class="progress__bar">
            <div class="progress__line progress__line--loading" style="width: 70%"></div>
          </div>
        </div>
        <div class="progress">
          <div class="progress__counter">
            100%
          </div>
          <div class="progress__bar">
            <div class="progress__line progress__line--complete" style="width: 100%"></div>
          </div>
        </div>
        <div class="progress">
          <div class="progress__counter">
            20%
          </div>
          <div class="progress__bar">
            <div class="progress__line progress__line--paused" style="width: 20%"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  `
}
