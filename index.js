var port = process.env.PORT || 8081;
var io = require('socket.io')(port);
// var cfg0 = require('./config.json');
var cfg = {
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  token: process.env.TWITTER_TOKEN,
  token_secret: process.env.TWITTER_TOKEN_SECRET
};
console.log("port="+port);

var tw = require('node-tweet-stream')(cfg);
tw.track('happy');
// tw.trackMultiple(['happy','sweet']);
tw.on('tweet', function(tweet){
  console.log('tweet');
  io.emit('tweet', tweet);
});

tw.on('error', function (err) {
  console.log('Oh no');
  console.error(err);
})
