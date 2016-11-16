var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Instrument = mongoose.model('Instrument');

module.exports.instAll = function (req, res) {
	res.status(200);
	res.json({"inst" : "all"});
}

module.exports.instPic = function(req, res) {
	Instrument.
		findById(req.params.instId, "picture",
			function(err, inst) {
				console.log(inst);
		});
	res.status(200);
	res.json({"inst:" : "pic"});
}