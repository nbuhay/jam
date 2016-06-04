var express = require('express');
var indexCtrl = require('../controllers/indexCtrl')
var router = express.Router();

/* GET home page. */
router.get('/', indexCtrl.home);

module.exports = router;
