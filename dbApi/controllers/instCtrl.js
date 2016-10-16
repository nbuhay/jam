var express = require('express');
var router = express.Router();

module.exports.instAll = function (req, res) {
	res.status(200);
	res.json({"inst" : "all"});
}