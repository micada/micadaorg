var express = require('express');
var methodOverride = require('method-override');

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
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

var url = process.env.IP || '0.0.0.0'
var port = 80;
app.set('port', process.env.PORT || port)

function listening() {
    // NODE_ENV=production node index.js
    if (process.env.NODE_ENV == 'production') {
        console.log('Static server listening url %s on port %s', url, server.address().port);
    }
}

var server = app.listen(port, listening);