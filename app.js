const express = require('express');
const app = express()
const path = require('path');
const moment = require('moment')
const mongoose = require('mongoose');
const morgan = require('morgan');
const methodOverride = require('method-override');
const flash = require('express-flash')
const passport = require('passport');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const connectDB = require('./config/db');

const mainRoutes = require('./routes/main');
const studentRoutes = require('./routes/students');
const interventionRoutes = require('./routes/interventions');
const recordRoutes = require('./routes/records');

// Use .env file in config folder
require("dotenv").config ({ path: './config/config.env' });

// Passport config
require('./config/passport')(passport);

// Connect to Database
connectDB();

// EJS view engine
app.set('view engine', 'ejs');

// Static Folder
app.use(express.static('public'));

// Body Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
};

// Method override to use forms for put & delete
app.use(methodOverride("_method"));

// Session middleware
app.use(
    session({
      secret: 'student growth',
      resave: false,
      saveUninitialized: false,
      store: MongoStore.create({ mongoUrl: process.env.MONGO_URI })
    })
  )

// Passport middleware
app.use(passport.initialize())
app.use(passport.session())

//Use flash messages for errors, info, ect...
app.use(flash());

// Set global variable
app.use(function (req, res, next) {
  res.locals.user = req.user || null
  next()
})

// Routes
app.use('/', mainRoutes);
app.use('/students', studentRoutes);
app.use('/interventions', interventionRoutes);
app.use('/record', recordRoutes);

const PORT = process.env.PORT || 5000

app.listen(
    PORT, 
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)