var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/login', function(req, res, next) {
  res.render('login.ejs', { message: req.flash('loginMessage') });
});

router.get('/signup', function(req, res) {
  res.render('signup.ejs', { message: req.flash('loginMessage') });
});

router.get('/profile', isLoggedIn, function(req, res) {
  res.render('profile.ejs', { user: req.user });
});

router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});

router.post('/signup', passport.authenticate('local-signup', {
  successRedirect: '/profile',
  failureRedirect: '/signup',
  failureFlash: true,
}));

router.post('/login', passport.authenticate('local-login', {
  successRedirect: '/profile',
  failureRedirect: '/login',
  failureFlash: true,
}));

// Facebook routes
router.get('/auth/facebook', passport.authenticate('facebook', {
  scope: 'email',
  callbackURL: '/auth/facebook/callback'
}));
router.get('/auth/facebook/callback', passport.authenticate('facebook', {
  successRedirect: '/profile',
  failureRedirect: '/',
  callbackURL: '/auth/facebook/callback'
}));

module.exports = router;

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated())
      return next();
  res.redirect('/');
}
