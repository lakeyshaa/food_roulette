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

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
})

app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.get('*', (req,res)=> {
  res.sendFile(path.join(__dirname, 'client/build/index.html'))
})


module.exports = app;