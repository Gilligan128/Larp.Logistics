var express = require('express');
var router = module.exports = express.Router();
import {tags} from "./tags.js";

router.get('/', function(req, res){
    res.render('tags/tags.ejs');
});

router.get('/print', function(req, res){
    res.render('tags/print.ejs', tags.printed);
});