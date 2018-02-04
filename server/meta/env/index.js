const util = require('../../util/common');
const ENV = require('./env');
const extend = require('./' + process.env.NODE_ENV);

util.mergeMeta(ENV, extend);

let enumObjects = [ENV.userTypes];
util.createEnums(enumObjects);

module.exports = ENV;