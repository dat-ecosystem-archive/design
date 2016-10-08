const yo = require('yo-yo')

module.exports = function () {
  return yo`
  <div class="sg-section">
    <h2>Dat Links</h2>
    <h3 class="hd-xxs sg-label">Default Links</h3>
    <div class="sg-subsection">
      <div class="sg-example">
        <p>
          Default links are green and look like this: <a href="#" class="link--green">Default Link</a>. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad <a href="#">Default Link</a> minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
    <h3 class="hd-xxs sg-label">Other Links</h3>
    <div class="sg-subsection">
      <div class="sg-example">
        <a href="#" class="link--info">Info Link</a>
        <br>
        <a href="#" class="link--warning">Warning Link</a>
        <br>
        <a href="#" class="link--danger">Error/Danger Link</a>
        <br>
        <a href="#" class="link--disabled">Disabled Link</a>
        <!-- <br>
        <a href="#" class="link--green" disabled>Disabled Link</a> -->
      </div>
    </div>
  </div>
  `
}
