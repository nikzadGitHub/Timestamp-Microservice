// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

var moment = require("./moment.js");
// var port = Number(process.env.PORT||50893);

app.get('/api/:date?',function(req,res){

    let input = req.params.date;

    let outPut = { error : "Invalid Date" };
    
    // Handle empty, get current time.
    if (typeof input == 'undefined' || input.length == 0) {
      console.log('undefined or empty')
      input = new Date(); // Get current time
    }

    if(new Date(input) != 'Invalid Date') {

      console.log('valid input date')

      // Time conversion to unix and utc
      outPut = { 
        unix : new Date(input).getTime(),
        utc: new Date(input).toGMTString(),
      }
    }
    else if(new Date(input) != 'Invalid Date') {
      // Time conversion to unix and utc
      outPut = { 
        unix : input,
        utc: new Date(input).toGMTString()
      }
    } 

    res.json({ unix: 1451001600000, utc: "Fri, 25 Dec 2015 00:00:00 GMT" });
});

app.use(ignoreFavicon);
// app.use('/',express.static(__dirname+'/public'));

// http://expressjs.com/en/starter/basic-routing.html
// app.get("/", function (req, res) {
//   res.sendFile(__dirname + '/views/index.html');
// });

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
