const META = require('../meta');
const ENV = META.env;

const util = require('../util/common');
const express = require('express');
const app = express();
util.getApiRouter();

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.listen(ENV.port, function () {
    console.log('Example app listening on port ' + ENV.port + '!');
});