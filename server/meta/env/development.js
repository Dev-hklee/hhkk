const util = require('../../utils/common');
const  ENV = {};
ENV.port = 8080;
ENV.userTypes = util.createEnum({
    "11": 1,
    "22": 2,
    "33": 3,
    "44": 4,
});
module.exports = ENV;