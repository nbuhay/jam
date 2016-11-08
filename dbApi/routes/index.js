var express = require('express');
var router = express.Router();
var userCtrl = require('../controllers/userCtrl')
var instCtrl = require('../controllers/instCtrl')

// users
router.get('/user', userCtrl.usersAll);
router.post('/user', userCtrl.usersCreate);

// instruments
router.get('/inst', instCtrl.instAll);

module.exports = router;