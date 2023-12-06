
const Discord = require('selfo.js')

module.exports.run = (Client, channels) => {
  
  const channel = Client.channels.get(channels['evolusty']['play4'])
  
  setInterval(() => {
    channel.send('.explorar')
    setTimeout(() => { channel.send('.minerar') }, 1000)
    setTimeout(() => { channel.send('.escavar') }, 2000)
    setTimeout(() => { channel.send('.caçar')   }, 3000)
    setTimeout(() => { channel.send('.pescar')  }, 4000)
  }, 31000)
  
  setInterval(() => {
    channel.send('.caverna')
  }, 121000)
  
}