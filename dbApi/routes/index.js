var express = require('express');
var router = express.Router();
var userCtrl = require('../controllers/userCtrl')
var instCtrl = require('../controllers/instCtrl')

// users
router.get('/user', userCtrl.getUsers);
router.get('/user/:userId', userCtrl.getUser)
router.post('/user', userCtrl.createUser);

// instruments
router.get('/inst', instCtrl.instAll);

module.exports = router;