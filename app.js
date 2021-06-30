const express = require('express');
const hbs = require('handlebars'); 

const date = require('./date/date');

var app = express(); 

const port = process.env.PORT || 3000; 

app.set('view engine', hbs); 

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render(__dirname + '/public/index.hbs');
});

app.get('/submit', (req, res) => {
    console.log('App.js input ', req.query.input);
    console.log(typeof req.query.input);
    var input = req.query.input; 
    var output = date.convert(input); 
    console.log('App.js output ', output);
 
    res.render(__dirname + '/public/index.hbs', {
        date: output.ds, 
        timestamp: output.ts
    });
    
});

app.listen(port, () => {
    console.log(`Running on port ${port}`);
})

