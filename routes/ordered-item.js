const express = require('express')
const router = express.Router()
const orderedItemsCtrl = require('../controllers/ordered-item')

router.post('/baskets/:id/ordered-item', orderedItemsCtrl.create)

// router.put('/baskets/:basketId/ordered-items/:itemId', orderedItemsCtrl.update)

router.delete(
  '/baskets/:basketsId/ordered-item/:itemId',
  orderedItemsCtrl.delete
)

module.exports = router
