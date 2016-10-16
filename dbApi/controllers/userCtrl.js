var express = require('express');
var router = express.Router();

module.exports.usersAll = function (req, res) {
	res.status(200);
	res.json({"status" : "success", "nice" : true});
}