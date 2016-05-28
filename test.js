var bot = require('./bannedListBot.js');
console.log('# Loaded')
bot.handler()
console.log('# Started OK')
bot.inst.postMessageToChannel('general', 'walk the talk');
bot.inst.postMessageToChannel('general', 'breathtaking arrogance');
bot.inst.postMessageToChannel('general', 'many studies have shown');
console.log('# Sent our own message')
