var SlackBot = require('slackbots');
var rules = require('./bannedList.js');
require('./env.js');

var bot = new SlackBot({
    token: process.env.slackToken,
    name: process.env.botName
});

exports.inst = bot

exports.handler = function(event, context) {
  bot.on('message', function(data) {  // all ingoing events https://api.slack.com/rtm
    // console.log('--- msg:', data);

    if (data.type != 'message' /* FIXME Comment out for testing: || data.subtype == 'bot_message' */) {
      return
    }

    if (/#BannedList/.exec(data.text)) {
      // console.log('--- SKIP:', data.text);
      return
    }

    // console.log('--- Text:', data.text);

    if (findMatchAmongTerms(data.text, rules.coreTerms, '')) {
      return
    }

    findMatchAmongTerms(data.text, rules.extraTerms, ' extra ')
  });
}

function findMatchAmongTerms(incomingString, terms, termsName) {
  var params = {  // https://api.slack.com/methods/chat.postMessage
    icon_emoji: ':crying_cat_face:'
  };

  for (var i = 0; i < terms.length; i++) {
    // console.log('>> ct = ', rules.coreTerms[i].regex);

    var found = terms[i].getRegex().test(incomingString);
    // console.log('> pos = ' + pos, 'for', rules.coreTerms[i].getTitle());
    if (found) { // .* matching "" causes infinite loop
      var title = terms[i].getTitle()
      if (title === '') {
        // console.log('IGNORE ' + termsName + ' match')
        return true
      }

      // console.log('FOUND ' + termsName + ' ' + title);
      bot.postMessageToChannel('general', 'I\'m afraid that _"' + incomingString + '"_ is on the ' + termsName + title /*+ ' @ ' + new Date().toISOString() */, params);
      return true
    }
  }
  return false // Not found
}
