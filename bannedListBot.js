var SlackBot = require('slackbots');
var rules = require('./bannedList.js');
require('./env.js');

function BannedListBot(inToken) {
  this._slackToken = inToken || process.env.slackToken;
  this._slackBot = new SlackBot({token: this._slackToken, name: process.env.botName, scope: 'bot'});
}

exports.BannedListBot = BannedListBot;

BannedListBot.prototype.slackBot = function() {
  return this._slackBot;
};

BannedListBot.prototype.start = function(event, context) {
  console.log('## Starting Bot for token <' + this._slackToken + '>')

  var bot = this._slackBot;

  bot.on('message', function(data) {  // all ingoing events https://api.slack.com/rtm
    // console.log('--- msg:', data);

    // FIXME Checks for data.subtype == 'bot_message'?
    if (data.subtype === 'message_changed') {
      handleText( bot, data.channel, data.message.text)
    }
    else if (data.type == 'message') {
      handleText( bot, data.channel, data.text)
    }
  });

  return this;
}

function handleText(slackBot, channelId, str) {
  if (!str || /#BannedList/.exec(str)) {
    return
  }

  // console.log('--- Text:', str);

  if (findMatchAmongTerms(slackBot, channelId, str, rules.coreTerms, '')) {
    return
  }

  findMatchAmongTerms(slackBot, channelId, str, rules.extraTerms, ' extra ')
}

function findMatchAmongTerms(slackBot, channelId, incomingString, terms, termsName) {
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

      slackBot.postMessage(channelId, 'I\'m afraid that _"' + incomingString + '"_ is on the ' + termsName + title, params);
      return true
    }
  }
  return false // Not found
}
