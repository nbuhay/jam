var express = require('express');

/* GET home page */
module.exports.home = function(req, res) {
  res.render('index', { title: 'Welcome', subTitle: 'Hyoshi - Natural Rhythm' });
};

/* GET about page */
module.exports.about = function(req, res) {
    res.render('about', {title: 'About'});
};