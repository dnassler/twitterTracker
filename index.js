var port = process.env.PORT || 8081;
var io = require('socket.io')(port);
//var cfg = require('./config.json');
// {
//     "consumer_key": "QOQJimqeQNW30avA0eX3zg4FR",
//     "consumer_secret": "BPuOvOvi2AbIiJx8i0YmtcQFgPJOTGGb70GDPHyCysHtdCo9IL",
//     "token": "20842155-FEcaE2xF93mCKkCkWm9TMJ11P93BTc7EV92Pe77GB",
//     "token_secret": "UmPLOFELAEhEEoqyfgNrpb1A7SnVZ6FpyabgDKbTyJBXw"
// }
var cfg = require({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  token: process.env.TWITTER_TOKEN,
  token_secret: process.env.TWITTER_TOKEN_SECRET
});
var tw = require('node-tweet-stream')(cfg);
tw.track('happy');
// tw.trackMultiple(['happy','sweet']);
tw.on('tweet', function(tweet){
  io.emit('tweet', tweet);
});