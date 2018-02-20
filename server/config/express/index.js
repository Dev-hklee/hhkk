const app = require('./express');
require('./passport')(app);
require('./router')(app);

module.exports = app;


