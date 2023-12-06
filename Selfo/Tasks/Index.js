
const colors   = require('cli-color')

const channels = require('../Jsons/channels.json')

const Evorpg   = require('./Evorpg.js')

module.exports.run = (Client) => {
  
  Evorpg.run(Client, channels)
  
  console.log(colors.magenta('[Handler]'), '1 Task carregada.')
  
}