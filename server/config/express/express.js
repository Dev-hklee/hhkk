const META = require('../../meta/index');
const ENV = META.env;

const util = require('../../util/common');
const express = require('express');
const app = express();

const router = require('./router');

console.log(router);

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.listen(ENV.port, function () {
    console.log('Example app listening on port ' + ENV.port + '!');
});