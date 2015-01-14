// A simple Node server for Heroku deployment

// var gzippo = require('gzippo');
var express = require('express');
var app = express();
var public_path = require('path');
 
// app.use(express.logger('dev'));
// app.use(gzippo.staticGzip("" + __dirname + "/dist"));
app.use(express.static(public_path.join(__dirname, 'dist')));
app.listen(process.env.PORT || 5000);