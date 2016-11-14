var express = require('express');
var methodOverride = require('method-override');
var path = require('path');
var serveStatic = require('serve-static')

// web app middleware
var app = express();

// bootstrap public/index.html
app.use(methodOverride());

// server-side router
var router = express.Router();

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
app.use(serveStatic(__dirname + '/public'))
app.get('*', function(req, res) {
    res.sendFile(path.resolve(__dirname, 'public', 
      ['index.html', 'styles.css', 'favicon.ico', '05d72bd616722f39afef30004839ce08.eot', 
      '6ef18e62928bfbe78057f6604702062a.woff', 'd3b5827e4faf0b034d4b2bcaa6d43724.ttf']))
})

var url = process.env.IP || '0.0.0.0'
var port = 5000;
app.set('port', process.env.PORT || port)

function listening() {
    // NODE_ENV=production node index.js
    if (process.env.NODE_ENV == 'production') {
        console.log('Static server listening url %s on port %s', url, server.address().port);
    }
}

var server = app.listen(port, listening);