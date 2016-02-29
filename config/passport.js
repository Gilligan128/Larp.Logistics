var LocalStrategy = require('passport-local').Strategy;

module.exports = function(passport) {
  passport.serializeUser(function(user, done) {
    done(null, user.email);
  });
  passport.deserializeUser(function(id, done) {
      done(null, {email: 'test user', password: 'pass'});
  });

  passport.use('local-signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true,
  },
  function(req, email, password, done) {
    process.nextTick(function() {
          var newUser = {
            email : email,
            password: password
          };
          done(null, newUser);
    });
  }));
  

  passport.use('local-login', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true,
  },
  function(req, email, password, done) {
      return done(null, {email: email});
  }));
};
