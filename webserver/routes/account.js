var express = require('express');
var router = express.Router();
var accountCtrl = require('../controllers/accountCtrl.js');

/* GET account */
router.get('/', accountCtrl.home);

module.exports = router;