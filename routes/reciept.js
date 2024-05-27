var express = require('express');
var router = express.Router();
const recieptCtrl = require('../controllers/reciept');

router.get('/', recieptCtrl.index);
router.get('/reciept', recieptCtrl.show);

module.exports = router;

