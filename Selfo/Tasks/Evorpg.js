
const Discord = require('selfo.js')

module.exports.run = (Client, channels) => {
  
  const channel = Client.channels.get(channels['evolusty']['play4'])
  
  setTimeout(() => {
    channel.send('.explorar')
    channel.send('.minerar')
    channel.send('.escavar')
    channel.send('.caçar')
    channel.send('.pescar')
  }, 31000)
  
  setTimeout(() => {
    channel.send('.caverna')
  }, 121000)
  
}