var express = require('express');
var router = express.Router();
var restaurantCtrl = require('../controllers/restaurants')



router.get('/', restaurantCtrl.index)

router.get('/:id', restaurantCtrl.show)



module.exports = router;