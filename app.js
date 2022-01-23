require('dotenv').config()
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser')
var logger = require('morgan');

var indexRouter = require('./routes/index')
var userRouter = require('./routes/users')
var locationRouter = require('./routes/locations')

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.get('/', function (req, res) {
//   res.json({success: 'test'})
// })

app.use('/', indexRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/users', locationRouter);


module.exports = app;