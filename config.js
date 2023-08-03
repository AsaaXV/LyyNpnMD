global.owner = ['62838973901644']  
global.mods = ['62'] 
global.prems = ['62']
global.nameowner = 'Aether'
global.numberowner = '62838973901644' 
global.mail = 'neastooid@kotakpos.cloud' 
global.gc = 'https://chat.whatsapp.com/CZovAqw9nRqIVwSmCBtT5d'
global.instagram = 'https://instagram.com/yusupk._'
global.wm = '©LyyyNpnD'
global.wait = '_*Tunggu sedang di proses...*_'
global.eror = '_*Server Error*_'
global.stiker_wait = '*⫹⫺ Stiker sedang dibuat...*'
global.packname = 'Made With'
global.author = 'Bot WhatsApp'

//INI WAJIB DI ISI!//
global.btc = 'YOUR_APIKEY_HERE' 
//Daftar terlebih dahulu https://api.botcahx.live

global.lann = 'YOUR_APIKEY_HERE'
//Daftar terlebih dahulu https://api.betabotz.org 

global.APIs = {   
  btc: 'https://api.botcahx.live'
}
global.APIKeys = { 
  'https://api.botcahx.live': 'Apikey' 
}

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
