var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
 
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var AlcoholRouter = require('./routes/Alcohol');
var gridRouter = require('./routes/grid');
var pickRouter = require('./routes/pick');
var resourceRouter = require('./routes/resource');
 
var app = express();
 
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
 
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
 
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/Alcohol', AlcoholRouter);
app.use('/grid', gridRouter);
app.use('/pick', pickRouter);
app.use('/resource', resourceRouter);
 
var Alcohol = require("./models/Alcohol");
require('dotenv').config();
var mongoose = require('mongoose');
const connectionString = process.env.MONGO_CON;
mongoose.connect(connectionString);
//Get the default connection
var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open", function(){
console.log("Connection to DB succeeded");
 
});
 
// catch 404 and forward to error handler
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
 
module.exports = app;
 
async function recreateDB(){
  // Delete everything
  await Alcohol.deleteMany();
 
  let instance1 = new Alcohol({Alcohol_type: 'Whisky', Brand:'Oldmonk', Price: 30});
  instance1.save().then(doc=>{
  console.log("First object saved")}
  ).catch(err=>{
  console.error(err)
  });
 
 
  let instance2 = new Alcohol({Alcohol_type: 'Rum', Brand:'Bacardi', Price: 20});
  instance2.save().then(doc=>{
  console.log("Second object saved")}
  ).catch(err=>{
  console.error(err)
  });
 
 
  let instance3 = new Alcohol({Alcohol_type: 'Vodka', Brand:'Abolute', Price: 220});
  instance3.save().then(doc=>{
  console.log("Third object saved")}
  ).catch(err=>{
  console.error(err)
  });
  }
  let reseed = true;
  if (reseed) {recreateDB();}