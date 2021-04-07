var express = require('express');
var app = express();

const bodyParser = require('body-parser');

// --> 11)  Mount the body-parser middleware  here
app.use(bodyParser.urlencoded({ extended: false}));


app.get("/", function(req, res) {
    res.sendFile(__dirname + "/views/index.html");
});

app.get("/test", function(req, res) {

});

app.post("/name", function(req, res) {
  // Handle the data in the request
  var string = req.body.first + " " + req.body.last;
  res.json({ name: string });
});





































 module.exports = app;
