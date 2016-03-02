var express = require('express');
var passport = require('passport');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/menu', isLoggedIn, function(req, res) {
  res.render('menu.ejs', { user: req.user });
});

router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});

// Facebook routes
router.get('/auth/facebook', passport.authenticate('facebook', {
  scope: 'email',
  callbackURL: '/auth/facebook/callback'
}));
router.get('/auth/facebook/callback', passport.authenticate('facebook', {
  successRedirect: '/menu',
  failureRedirect: '/',
  callbackURL: '/auth/facebook/callback'
}));

module.exports = router;

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated())
      return next();
  res.redirect('/');
}
