const META = require('../../meta');
const path = require('path');
const router = require('express').Router();

let apiKey = path.parse(__dirname).name;
let method = path.parse(__filename).name;
let apiUri = META.apiList[apiKey][method];

if (method === 'gets') {
    method = 'get';
}

let validate = (req, res, next) => {
    return () => {
        req.test1 = 1;
    };
};

let setParams = (req, res, next) => {
    return () => {
        req.test2 = 1;
    };
};

let supply = (req, res, next) => {
    return () => {
        console.log(req.test1, req.test2);
        res.send('get');
    };
};

router[method](apiUri, (req, res) => {
    Promise.resolve()
        .then(validate(req, res))
        .then(setParams(req, res))
        .then(supply(req, res));
});

module.exports = router;