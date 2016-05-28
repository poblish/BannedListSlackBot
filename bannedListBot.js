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

    // FIXME Checks for data.subtype == 'bot_message'?
    if (data.subtype === 'message_changed') {
      handleText( data.channel, data.message.text)
    }
    else if (data.type == 'message') {
      handleText( data.channel, data.text)
    }
  });
}

function handleText(channelId, str) {
  if (!str || /#BannedList/.exec(str)) {
    return
  }

  // console.log('--- Text:', str);

  if (findMatchAmongTerms(channelId, str, rules.coreTerms, '')) {
    return
  }

  findMatchAmongTerms(channelId, str, rules.extraTerms, ' extra ')
}

function findMatchAmongTerms(channelId, incomingString, terms, termsName) {
  var params = {  // https://api.slack.com/methods/chat.postMessage
    icon_emoji: ':crying_cat_face:'
  };

  for (var i = 0; i < terms.length; i++) {
    var found = terms[i].getRegex().test(incomingString);
    if (found) { // .* matching "" causes infinite loop
      var title = terms[i].getTitle()
      if (title === '') {
        // console.log('IGNORE ' + termsName + ' match')
        return true
      }

      bot.postMessage(channelId, 'I\'m afraid that _"' + incomingString + '"_ is on the ' + termsName + title, params);
      return true
    }
  }
  return false // Not found
}
