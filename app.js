var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser')
var logger = require('morgan');
const sessions = require("express-session");

var homeRouter = require('./routes/home');
var usersRouter = require('./routes/users');
var wishlistRouter = require('./routes/wishlists');
var dashboardRouter = require('./routes/dashboards');
const eventsRouter = require('./routes/events');
const requestsRouter = require('./routes/requests');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// clear the cookies after user logs out
app.use((req, res, next) => {
  if (req.cookies.user_sid && !req.session.user) {
    res.clearCookie("user_sid");
  }
  next();
});

//session middleware
const oneHour = 1000 * 60 * 60;

app.use(sessions({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    saveUninitialized: false,
    cookie: { maxAge: oneHour },
    resave: false
}));

// middleware function to check for logged-in users
const sessionChecker = (req, res, next) => {
  if (!req.session.user && !req.cookies.user_sid) {
    console.log('redirect to login');
    res.redirect("/");
  } else {
    console.log('session checked');
    next();
  }
};

app.use('/', homeRouter);
app.use('/user', usersRouter);
app.use('/dashboard', sessionChecker, dashboardRouter);
app.use('/wishlist', sessionChecker, wishlistRouter);
app.use('/events', sessionChecker, eventsRouter);
app.use('/requests', sessionChecker, requestsRouter);


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
  next();
});

module.exports = app;
