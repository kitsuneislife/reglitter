
const colors  = require('cli-color')

const Utils   = require('./Misc/Utils')
const App     = require('./Misc/Express')
const Selfo   = require('./Selfo/Index')

require('dotenv').config()


App.listen(3000, () => {
  console.log(Utils.now())
  console.log(
    colors.magenta("[Website]"), "Online."
  )
})

Selfo.run()