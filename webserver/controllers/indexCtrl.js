var express = require('express');

/* GET home page. */
module.exports.home = function(req, res) {
  res.render('index', { title: 'Test' });
};