# BannedListSlackBot
A project to build a Slack bot that applies the [#BannedList](http://bit.ly/bannedList) to all incoming text, based upon my original Chrome and Firefox [browser plugins](https://github.com/poblish/bannedList-Plugin).

## Installation:

Install dependencies ([Slackbots](https://www.npmjs.com/package/slackbots)) with:

    npm install
    
## Testing:

    node test.js
    
## Adding to Slack:

* Add it as a Custom Integration
* Add the bot to the Channel you want
* Type `ship of state` or similar
* Bot returns:

> I'm afraid that "ship of state"​ is on the  extra #BannedList of dodgy political language