
const Discord     = require('selfo.js')
const cliProgress = require('cli-progress')

module.exports.run = (Client, channels) => {
  
  const multibar = new cliProgress.MultiBar({
    clearOnComplete: false,
    hideCursor: true,
    format: ' {name} |' + '{bar}' + '| {percentage}% | {value}/{total}',
  }, cliProgress.Presets.shades_grey);
  const channel  = Client.channels.get(channels['evolusty']['play4'])
  
  let progressY = 0
  let progressX = 0
  
  const explorar = multibar.create(31, 0);
  const caverna  = multibar.create(121, 0);
  
  setInterval(() => {
    channel.send('.explorar')
    setTimeout(() => { channel.send('.minerar') }, 1000)
    setTimeout(() => { channel.send('.escavar') }, 2000)
    setTimeout(() => { channel.send('.caçar')   }, 3000)
    setTimeout(() => { channel.send('.pescar')  }, 4000)
    progressY = 0
  }, 31000)
  
  setInterval(() => {
    progressY++;
    explorar.update(progressY, { name: "Explorar" } )
  }, 1000)
  
  setInterval(() => {
    channel.send('.caverna')
    progressX = 0;
  }, 121000)
  
  setInterval(() => {
    progressX++;
    caverna.update(progressX, { name: "Caverna "} )
  }, 1000)
  
}