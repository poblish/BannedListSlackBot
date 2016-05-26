var SlackBot = require('slackbots');
require('./env.js');

exports.handler = function(event, context) {
  var bot = new SlackBot({
      token: process.env.slackToken,
      name: process.env.botName
  });

  bot.on('start', function() {
      // console.log('Hello');
  });

  bot.on('open', function() {
      // console.log('Ready!');
  });

  bot.on('close', function() {
      // console.log('Closed');
  });

  bot.on('message', function(data) {
      // all ingoing events https://api.slack.com/rtm
      console.log('OnMessage:', data);

      if (data.type != 'message' || data.subtype == 'bot_message') {
        return
      }

      // more information about additional params https://api.slack.com/methods/chat.postMessage
      var params = {
          icon_emoji: ':cat:'
      };

      // define channel, where bot exist. You can adjust it there https://my.slack.com/services
      console.log('Posting...')
      bot.postMessageToChannel('general', 'meow: ' + new Date().toISOString(), params);
  });
}
