var express = require('express');
var router = module.exports = express.Router();

router.get('/', function(req, res){
  res.render('rituals.ejs');
});
