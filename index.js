var express = require('express')
var morgan = require('morgan');
var serveStatic = require('serve-static')
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var path = require('path');
var _ = require('lodash');

// web app middleware
var app = express();
// console logger for server
app.use(morgan('short'));

// bootstrap public/index.html
app.use(methodOverride());

// server-side router
var router = express.Router();

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
app.use(serveStatic(__dirname + '/public'))
app.get('*', function (req, res){
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})
