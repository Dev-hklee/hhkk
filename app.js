const META = require('./server/meta');
const ENV = META.env;

const passport = require('passport');

const {app, sequelize} = require('./server/config');

app.post('/login',  (req, res, next) => {
    console.log(req.body);
    next();
});

app.post('/login',  passport.authenticate('local', {
    successRedirect : '/loginSuccess',
    failureRedirect: '/loginFail'
}));

app.listen(ENV.port, () => {
    console.log('Example app listening on port ' + ENV.port + '!');
});