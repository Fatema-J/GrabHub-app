var express = require('express')
var router = express.Router()
const receiptCtrl = require('../controllers/receipt')

router.get('/', receiptCtrl.index)
router.get('/:id', receiptCtrl.show)
router.post('/', receiptCtrl.create)

module.exports = router
