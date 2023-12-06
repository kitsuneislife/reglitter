
const colors   = require('cli-color')

const channels = require('../Jsons/channels.json')

const Evorpg   = require('./Evorpg.js')

module.exports.run = async(Client) => {
  
  console.log(colors.magenta('\n[Handler]'), '1 Task carregada.')
  
  Evorpg.run(Client, channels)      
}