const express = require('express');
const app = express();
const mustacheExpress = require('mustache-express');
const session = require('express-session');
const bodyParser = require('body-parser');
// const routes = require('./routes');
const morgan = require('morgan');
const path = require('path')

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
// app.use(expressValidator());
app.use(express.static('public'));
// app.use(routes);

app.use(session({
  secret: 'true',
  resave: false,
  saveUninitialized: true
}));

app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set ('view engine', 'mustache');

app.get('/signUp', function(req, res) {
  res.render('signUp', myObject);
});

app.get('/', function(req, res) {
  res.render('index', myObject);
});

app.get('/login', function(req, res) {
  res.render('login', myObject);
});

app.get('/seeLikes', function(req, res) {
  res.render('seeLikes', myObject);
});

app.get('/newMessage', function(req, res) {
  res.render('newMessage', myObject2);
});



app.listen(3000, function() {
  console.log("Gabble... Listening on 3000");
});

myObject = {
  myWord: "sign up",

};

myObject2 = {
  myWord: "sign up2",

};
