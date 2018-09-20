// app.js

var express = require('express');

var app = express();
var port = 3000;

var itemRouter = require('./src/routes/itemRoutes');

var mongoose = require('mongoose');

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());



mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://uzerp2:AllIwanna123@ds263172.mlab.com:63172/mongodb1') 
    .then(() => { // if all is ok we will be here
      console.log('Connected to mongodb1');
    })
    .catch(err => { // if error we will be here
        console.error('App starting error:', err.stack);
        process.exit(1);
    });



app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use('/items', itemRouter);

app.listen(port, function () {
  console.log('Server is running on port:', port);
});

app.get('/', function (req, res) {
  res.render('index');
});