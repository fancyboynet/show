var path = require('path');
global['_require'] = function(mod){ //相对根目录获取自定义module
    return require(path.join(__dirname, mod));
};
var express = require('express');
var app = express();
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var routes = _require('controllers/routes');
var _404 = _require('controllers/404');
var error = _require('controllers/error');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use('/static', express.static(path.join(__dirname, 'static')));
app.use('/bower_components', express.static(path.join(__dirname, 'bower_components')));

//routes
app.use(routes());
//404
app.use(_404());
//error
app.use(error(app.get('env') === 'development'));

module.exports = app;
