const META = require('./server/meta');
const ENV = META.env;

const app = require('./server/config/express');

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.listen(ENV.port, function () {
    console.log('Example app listening on port ' + ENV.port + '!');
});