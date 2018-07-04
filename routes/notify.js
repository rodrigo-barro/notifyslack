var express = require('express');
const { WebClient } = require('@slack/client');

// An access token (from your Slack app or custom integration - xoxp, xoxb, or xoxa)
//const token = process.env.SLACK_TOKEN;
const token = "";
const web = new WebClient(token);

// This argument can be a channel ID, a DM ID, a MPDM ID, or a group ID
const conversationId = 'CBJP3JS6Q';

var router = express.Router();
/*
router.post('/:channelID', function(req, res, next) {
  //res.send('respond with a resource');
 console.log(req.body);
 var channelID = req.params.channelID;

  web.chat.postMessage({ channel: conversationId, text: 'Hello there' })
  .then((res) => {
    // `res` contains information about the posted message
    console.log('Message sent: ', res.ts);
  })
  .catch(console.error);
}); */

router.post('/:channelID', function(req, res, next) {
  //res.send('respond with a resource');
 console.log(req.body);
 var channelID = req.params.channelID;

  web.chat.postMessage({ channel: channelID, text: req.body.text })
  .then((res) => {
    // `res` contains information about the posted message
    console.log('Message sent: ', res.ts);
  })
  .catch(console.error);
}); 

module.exports = router;
