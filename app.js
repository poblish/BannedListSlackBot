var BannedListBot = require('./bannedListBot.js').BannedListBot;
console.log('# Loaded Production')
//console.log('# Started Production OK')

process.on('uncaughtException', function (err) {
  if (err.message == '[Slack Bot Error] invalid_auth' ||
      err.message == '[Slack Bot Error] token_revoked') {
    console.log('IGNORE: ' + err.message)  // FIXME Can we find out *which* token failed?
  }
  else {
    console.log('FATAL', err)
    process.exit(1)
  }
})

/////////////////////////////////////////

var botTokens = {};

var AWS = require("aws-sdk");
AWS.config.update({region: process.env.awsRegion});
var docClient = new AWS.DynamoDB.DocumentClient();

console.log('# Loading past tokens...')

docClient.scan({TableName : process.env.awsDdbTableName}, function(err, data) {
    if (err) {
        console.error("Unable to query. Error:", JSON.stringify(err, null, 2));
        process.exit(1)
    }

    var rows = 0;
    data.Items.forEach(function(item) {
        rows++;
        validateToken(item.access_token, loadValidToken, loadBadToken);
    });

    // FIXME Only in test mode!  FIXME This needs to be done if DB bypassed too, with proper func!
    // if (Object.keys(botTokens).length == 0) {
    //   botTokens[ process.env.slackToken ] = new BannedListBot(/* default */).start();
    // }

    console.log("# Loaded " + rows + " botToken(s)");
});

function loadValidToken(token) {
  botTokens[token] = new BannedListBot(token).start();
}

function loadBadToken(token) {
  docClient.delete({TableName : process.env.awsDdbTableName, Key: {access_token: token}}, function(err, data) {
    if (err) {
      console.log("ERROR Deleting token <" + token + ">");
    }
  });
}

/////////////////////////////////////////  Express setup

var port = process.env.PORT || 3000;  // No need to change ELB
var express = require('express');
var app = express();

// Serve anything in this dir
app.use(express.static('static_html'));

app.get('/slackAuth', function (req, res) {
  var code = req.param('code');
  if (code) {
    console.log('## Code is', code);
    handleSlackCode(code);  // FIXME No checking of return value
    res.redirect('/thanks.html');
  }
  else {
    console.log("ERROR: Missing 'code' parameter. Redirecting...");
    res.redirect('/');
  }
});

app.listen(port, function () {
  console.log('# Web server listening on port ' + port + '...');
});

/////////////////////////////////////////  For Slack auth

var WebClient = require('@slack/client').WebClient;
var slackWebClient = new WebClient('');
// handleSlackCode('45971131990.48205120515.3158b0e4fa');

function validateToken(token, okHandler, failHandler) {
  new WebClient(token).auth.test( function(data, apiResp) {
    if (!apiResp.ok) {
      console.warn("INVALIDATE and delete <" + token + "> due to '" + apiResp.error + "'");
      failHandler(token);
    }
    else {
      okHandler(token);
    }
  });
}

function handleSlackCode(slackCode) {
  slackWebClient.oauth.access( process.env.appClientId, process.env.appClientSecret, slackCode, null, function(err, apiResp) {
    if (err) {
      console.log('API lookup failed:', err);
    }
    else if (apiResp.error) {
      console.log('API Error:', apiResp.error);
    }
    else {
      var newToken = apiResp.access_token;
      console.log('## Received API token', newToken);

      if (botTokens[newToken] != null) {
        throw new Error('Token already used');
      }

      var newItemParams = {
        TableName : process.env.awsDdbTableName,
        Item: {access_token: newToken}
      };

      // Ppersist this token, then associate with a running Bot
      docClient.put(newItemParams, function(err, data) {
        if (err) {
          console.log(err);  // FIXME Handle error better than this?!
        }
        else {
          botTokens[newToken] = new BannedListBot(newToken).start();
          console.log("### Updated botTokens =>", Object.keys(botTokens));
        }
      });
    }
  });
}
