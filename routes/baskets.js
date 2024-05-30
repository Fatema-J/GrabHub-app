const express = require('express')
const router = express.Router()
const basketCtrl = require('../controllers/baskets')

router.get('/', basketCtrl.show)

router.post(
  '/payOrder',
  (req, res, next) => {
    console.log('payOrder route hit')
    next()
  },
  basketCtrl.payOrder
)

module.exports = router
