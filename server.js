// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

app.use(ignoreFavicon);
app.use('/',express.static(__dirname+'/public'));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/api/:date?',function(req,res){

    let input = req.params.date;

    let outPut = { error : "Invalid Date" };
    
    // Handle empty, get current time.
    if (typeof input == 'undefined' || input.length == 0) {
      console.log('undefined or empty')
      input = new Date(); // Get current time
    }

    if(new Date(input) != 'Invalid Date') {
      console.log('ISO date provided!')
      // Time conversion to unix and utc
      outPut = { 
        unix : new Date(input).getTime(),
        utc: new Date(input).toGMTString(),
      }
    }
    else if(new Date(input * 1) != 'Invalid Date') {
      console.log('Unix date provided!')
      // Time conversion to unix and utc
      outPut = { 
        unix : input,
        utc: new Date(input * 1).toGMTString()
      }
    } 

    res.json(outPut);
});

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

function ignoreFavicon(req, res, next) {
  if (req.originalUrl.includes('favicon.ico')) {
    res.status(204).end()
  }
  next();
}
