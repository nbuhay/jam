var express = require('express');
var router = express.Router();
var indexCtrl = require('../controllers/indexCtrl');

/* GET home page */
router.get('/', indexCtrl.home);

/*GET about page */
router.get('/about', indexCtrl.about);

module.exports = router;
