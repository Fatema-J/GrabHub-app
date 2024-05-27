const express = require('express')
const router = express.Router()
const orderedItemsCtrl = require('../controllers/ordered-item')


router.post('/basket/:id/ordered-item', orderedItemsCtrl.create)

module.exports = router
