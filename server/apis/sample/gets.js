const META = require('../../meta');
const path = require('path');
const router = require('express').Router();

let apiKey = path.parse(__dirname).name;
let method = path.parse(__filename).name;
let apiUri = META.apiList[apiKey][method];

if (method === 'gets') {
    method = 'get';
}

router[method](apiUri, (req, res) => {
    let validate = () => {
        req.test1 = 1;
    };

    let setParams = () => {
        req.test2 = 2;
    };

    let supply = () => {
        console.log(req.test1, req.test2);
        res.send('gets');
    };

    Promise.resolve()
        .then(validate)
        .then(setParams)
        .then(supply);
});

module.exports = router;