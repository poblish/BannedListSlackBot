var bot = require('./bannedListBot.js');
console.log('# Loaded')
bot.handler()
console.log('# Started OK')
bot.inst.postMessageToChannel('general', 'walk the talk @ ' + new Date().toISOString());
bot.inst.postMessageToChannel('general', 'breathtaking arrogance @ ' + new Date().toISOString());
bot.inst.postMessageToChannel('general', 'many studies have shown @ ' + new Date().toISOString());
console.log('# Sent our own message')
