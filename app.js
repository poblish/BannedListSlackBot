var bot = require('./bannedListBot.js');
console.log('# Loaded Production')
bot.handler()
console.log('# Started Production OK')

/////////////////////////////////////////

var port = process.env.PORT || 3000;  // No need to change ELB
var express = require('express');
var app = express();

// Serve anything in this dir
app.use(express.static('static_html'));

// Not needed for index page, see: http://expressjs.com/en/starter/static-files.html
// app.get('/', function (req, res) {
//   res.writeHead(200);
//   res.write(indexHtml);
//   res.end();
// });

app.listen(port, function () {
  console.log('# Web server listening on port ' + port + '...');
});
