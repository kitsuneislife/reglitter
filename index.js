
const colors  = require('cli-color')

const Utils   = require('./Misc/Utils')
const App     = require('./Misc/Express')

App.listen(3000, () => {
  console.log(Utils.now())
  console.log(
    colors.magenta("[Website]"), "Online."
  )
})