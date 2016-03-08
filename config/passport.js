var LocalStrategy = require('passport-local').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;
var TwitterStrategy = require('passport-twitter').Strategy;
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var configAuth = require('./auth');

module.exports = function(passport) {
  passport.serializeUser(function(user, done) {
    done(null, user);
  });
  passport.deserializeUser(function(req, id, done) {
      done(null, req.session.passport.user);
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

 if(process.env.allowTestUser || true)
 {
  passport.use('local-login', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true,
    },
    function(req, email, password, done) {
      debugger;
       process.nextTick( function() {
         debugger;
        done(null, {email: email, name: 'Test Player'});
      })
    }));
  }

  passport.use(new FacebookStrategy({
    clientID: configAuth.facebookAuth.clientID,
    clientSecret: configAuth.facebookAuth.clientSecret,
    callbackURL:  configAuth.facebookAuth.callbackURL,
    profileFields: ['id', 'email', 'first_name', 'last_name'],
  },
  function(token, refreshToken, profile, done) {
    process.nextTick(function() {
      done(null, {
          name : profile.name.givenName + ' ' + profile.name.familyName,
          facebook : {
            id : profile.id,
            token : token,
            name : profile.name.givenName + ' ' + profile.name.familyName,
            email : (profile.emails[0].value || '').toLowerCase
          }
        });
    });
  }));
};
