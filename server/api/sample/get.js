const META = require('../../meta');
const ENV = META.env;

const path = require('path');
const express = require('express');
const router = express.Router();
const method = path.parse(__filename).name;

console.log(method);
console.log(__dirname.split(ENV.api.path));

router[method]('/sample');



module.exports = router;