const META = require('../../meta/index');
const ENV = META.env;

const path = require('path');
const util = require('../../utils/common');
const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({
    secret: '1234',
    resave: false,
    saveUninitialized: true
}));
app.use(express.static('client'));

module.exports = app;

