require('dotenv').config()
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser')
const logger = require('morgan');

const indexRouter = require('./routes/index')
const userRouter = require('./routes/users')
const locationRouter = require('./routes/locations')

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/', function (req, res) {
  res.json({success: 'test'})
})

app.use('/', indexRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/users', locationRouter);


module.exports = app;