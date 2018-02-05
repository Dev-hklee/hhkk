const path = require('path');
const express = require('express');
const router = express.Router();
const method = path.parse(__filename).name;
const META = require('../../meta');
const ENV = META.env;

console.log(__dirname.split(ENV.api.path));


// router[method]('/' + );