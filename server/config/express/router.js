const META = require('../../meta/index');
const ENV = META.env;
const API_BASE_URL = '/' + ENV.api.url;
const API_LIST = META.apiList;

const path = require('path');

let addAPI = app => {
    Object.keys(API_LIST).forEach(apiKey => {
        Object.keys(API_LIST[apiKey]).forEach(method => {
            let apiPath = path.join('../../', ENV.api.path, apiKey, method);
            let apiRouter = require(apiPath);
            app.use(API_BASE_URL, apiRouter);
        });
    });
};

module.exports = app => {
    addAPI(app);
};