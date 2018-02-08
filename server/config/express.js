const META = require('../meta/index');
const ENV = META.env;

const path = require('path');
const util = require('../util/common');
const express = require('express');
const app = express();

const routers = require('./router');

// Object.keys(routers).forEach(routeKey => {
//     console.log(1, path.join(path.sep, ENV.api.url, routeKey));
//     app.use(path.join(ENV.api.url, routeKey), routers[routeKey]);
// });

console.log(1, '/' + ENV.api.url);
app.use('/' + ENV.api.url, routers.sample);
module.exports = app;


