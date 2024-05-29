const express = require('express')
const router = express.Router()
const basketCtrl = require('../controllers/baskets')

router.get('/', basketCtrl.show)
//
// router.post('/basket:basketId/itemId', basketCtrl.update)
router.delete('/', basketCtrl.delete)

router.post('/', basketCtrl.add)

// router.post('/payOrder', basketCtrl.payOrder)

router.post(
  '/payOrder',
  (req, res, next) => {
    console.log('payOrder route hit')
    next()
  },
  basketCtrl.payOrder
)

module.exports = router
