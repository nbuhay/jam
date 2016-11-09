var express = require('express');
var mongoose = require('mongoose');
var User = mongoose.model('User');
var router = express.Router();

module.exports.getUsers = function (req, res) {
	res.status(200);
	res.json({"status" : "success", "nice" : true});
}

module.exports.getUser = function (req, res) {
	if(req.params && req.params.userId) {
		User
		.findById(req.params.userId)
		.exec(function(err, user) {
			if(!user) {
				sendJsonResponse(res, 404, 
					{"message": "userid not found"});
				return;
			} else if(err) {
				sendJsonResponse(res, 404, err);
				return;
			}
			sendJsonResponse(res, 200, user);
		});
	} else {
		sendJsonResponse(res, 404,
			{"message": "no userid in request"});
	}
};

module.exports.createUser = function (req, res) {
	sendJsonResponse(res, 200, {"status" : "gud"});
};

var sendJsonResponse = function(res, status, content) {
	res.status(status);
	res.json(content);
};