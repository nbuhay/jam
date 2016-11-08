var express = require('express');
var router = express.Router();

module.exports.usersAll = function (req, res) {
	res.status(200);
	res.json({"status" : "success", "nice" : true});
}

module.exports.usersCreate = function (req, res) {
	sendJsonResponse(res, 200, {"status" : "gud"});
};

var sendJsonResponse = function(res, status, content) {
	res.status(status);
	res.json(content);
};