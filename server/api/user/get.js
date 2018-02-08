const META = require('../../meta');
const ENV = META.env;

const path = require('path');
const router = require('express').Router();
const method = path.parse(__filename).name;

console.log(method);
console.log(__dirname.split(ENV.api.path));

router[method]('/:param', (req, res) => {
    res.send(req.params.param);
});

module.exports = router;