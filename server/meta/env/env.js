const path = require('path');
const  ENV = {};
ENV.api = {
    "url": "api",
    "path": path.join("server", "api")
};
module.exports = ENV;