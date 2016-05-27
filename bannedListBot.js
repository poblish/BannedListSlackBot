var SlackBot = require('slackbots');
var rules = require('./bannedList.js');
require('./env.js');

var bot = new SlackBot({
    token: process.env.slackToken,
    name: process.env.botName
});

exports.inst = bot

exports.handler = function(event, context) {
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
    // console.log('--- msg:', data);

    if (data.type != 'message' /* FIXME Comment out for testing: || data.subtype == 'bot_message' */) {
      return
    }

    if (/#BannedList/.exec(data.text)) {
      // console.log('--- SKIP:', data.text);
      return
    }

    console.log('--- Text:', data.text);

    foundOne = false;

    var params = {
      icon_emoji: ':crying_cat_face:'
    };

    // console.log('Loaded rules', rules)
    for (var i = 0; i < rules.coreTerms.length; i++) {
      // console.log('>> ct = ', rules.coreTerms[i].regex);

      var found = rules.coreTerms[i].getRegex().test(data.text);
      // console.log('> pos = ' + pos, 'for', rules.coreTerms[i].getTitle());
      if (found) { // .* matching "" causes infinite loop
        console.log('FOUND Core ', rules.coreTerms[i].getTitle());
        bot.postMessageToChannel('general', data.text + ' was ' + rules.coreTerms[i].getTitle() /*+ ' @ ' + new Date().toISOString() */, params);
        foundOne = true
        break;
      }
    }

    if (foundOne) {
      return
    }

    for (var i = 0; i < rules.extraTerms.length; i++) {
      // console.log('> ', rules.extraTerms[i].getRegex);
      var found = rules.extraTerms[i].getRegex().test(data.text);
      if (found) { // .* matching "" causes infinite loop
        console.log('FOUND Extra ', rules.extraTerms[i].getTitle());
        bot.postMessageToChannel('general', data.text + ' was ' + rules.extraTerms[i].getTitle() /*+ ' @ ' /+ new Date().toISOString() */, params);
        foundOne = true
        break;
      }
    }

    // more information about additional params https://api.slack.com/methods/chat.postMessage
    // var params = {
    //     icon_emoji: ':cat:'
    // };
    //
    // // define channel, where bot exist. You can adjust it there https://my.slack.com/services
    // console.log('Posting...')
    // bot.postMessageToChannel('general', 'meow: ' + new Date().toISOString(), params);
  });
}
