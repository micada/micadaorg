let express = require('express');
let methodOverride = require('method-override');
let path = require('path');
let serveStatic = require('serve-static');

// web app middleware
let app = express();

// bootstrap public/index.html
app.use(methodOverride());

// server-side router
let router = express.Router();

app.use(serveStatic(__dirname + '/public'));
app.get('*', function(req, res) {
  res.sendFile(path.resolve(__dirname, 'public',
    ['index.html', 'styles.css', 'favicon.ico', '05d72bd616722f39afef30004839ce08.eot', 
    '6ef18e62928bfbe78057f6604702062a.woff', 'd3b5827e4faf0b034d4b2bcaa6d43724.ttf']))
});

let url = process.env.IP || '0.0.0.0';
let port = 80;
app.set('port', process.env.PORT || port);

let server = app.listen(port);
