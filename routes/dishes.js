const express = require('express')
const router = express.Router()
const dishesCtrl = require('../controllers/dishes')
const restaurantCtrl = require('../controllers/restaurants')

router.get('/restaurants/:id/dishes', restaurantCtrl.showDish)

module.exports = router
