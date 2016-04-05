# twitterTracker
Listens to twitter universe for particular strings and transmits the tweets to socket.io connected listeners.

## How To Run Server
Make sure node is installed. Modify the configuration keys and secrets for twitter api usage.
```
npm install
npm start
```

## client javascript
Include the socket.io javascript library:
`<script src="https://cdn.socket.io/socket.io-1.4.5.js"></script>`
then add code to connect to the server wherever it is running. 
So for example if it is running locally on port 8081 then the following code will 
get tweets.
```
var socket = io.connect('https://localhost:8081/');
socket.on('tweet', function(data) {
  if ( data.place !== null ) {
    if ( data.place.full_name ) {
      console.log('data.place.full_name = '+ data.place.full_name);
    }
  }
});
```
