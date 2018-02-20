const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

passport.serializeUser((user, done) => { // Strategy 성공 시 호출됨
    console.log('se');
    done(null, user); // 여기의 user가 deserializeUser의 첫 번째 매개변수로 이동
});

passport.deserializeUser((user, done) => { // 매개변수 user는 serializeUser의 done의 인자 user를 받은 것
    console.log('dese');
    done(null, user); // 여기의 user가 req.user가 됨
});

const localStrategyOptions = {
    usernameField : 'userId',
    passwordField : 'password',
    passReqToCallback : true
};

let localStrategyCallback = (req, userId, password, done) => {
    if(userId === 'hello' && password === 'world'){
        let user = {
            'userId': 'hello',
            'email': 'hello@world.com'
        };
        return done(null, user);
    }else{
        return done(null, false);
    }
};

passport.use(new LocalStrategy(localStrategyOptions, localStrategyCallback));

module.exports = app => {
    app.use(passport.initialize());
    app.use(passport.session());
};