
const Discord  = require('selfo.js')
const colors   = require('cli-color')

const Tasks    = require('./Tasks/Index.js')

const Client = new Discord.Client()

module.exports.run = () => {
  Client.on('ready', () => {
    console.log(colors.magenta('[Client]'), 'Online.')
    Tasks.run(Client)
  })
  Client.login(process.env.token)
}