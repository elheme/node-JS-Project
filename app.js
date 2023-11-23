var http=require("http");
var createError = require('http-errors');
var express = require('express');
var mongo=require('mongoose');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoconnect=require("./config/dbconnection.json")


mongo.connect(mongoconnect.url,{
  useNewUrlParser:true,     //affichage a partir de BD (parser URl)
  useUnifiedTopology:true      //acceder a la BD a partir de topologie exacte
})
.then(()=>console.log('mongo connected'))
.catch((err)=>console.log(err));

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var clientsRouter = require('./routes/api');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'twig');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/client', clientsRouter);

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


const serveur = http.createServer(app);
  serveur.listen(3001, console.log("server run "));

module.exports = app;
