var express = require('express');
var router = express.Router();
var userCtrl = require('../controllers/userCtrl');

/* GET users listing. */
router.get('/', userCtrl.home);

module.exports = router;
