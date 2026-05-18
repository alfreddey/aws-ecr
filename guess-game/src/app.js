const path = require('path');
const express = require('express');
const session = require('express-session');

const config = require('./config');
const routes = require('./routes');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'ui', 'views'));

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'ui', 'public')));
app.use(session({
  secret: config.sessionSecret,
  resave: false,
  saveUninitialized: true,
}));

app.use('/', routes);

module.exports = app;
