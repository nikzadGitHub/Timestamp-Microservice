var express = require('express');
var app = express();

const bodyParser = require('body-parser');

// --> 11)  Mount the body-parser middleware  here
app.use(bodyParser.urlencoded({ extended: false}));


app.get("/", function(req, res) {
  console.log("hi");
  res.json({ name: 'Naser Nikzad' });
});

app.get("/test", function(req, res) {

});

app.post("/name", function(req, res) {
  // Handle the data in the request
  var string = req.body.first + " " + req.body.last;
  res.json({ name: string });
});





































 module.exports = app;
