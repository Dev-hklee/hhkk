const util = require('../../utils/common');
const ENV = require('./env');
const extend = require('./' + process.env.NODE_ENV);
util.mergeMeta(ENV, extend);

module.exports = ENV;