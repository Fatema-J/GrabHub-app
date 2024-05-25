var express = require('express')
var router = express.Router()

var basketCtrl = require('../controllers/baskets')
router.get('/', basketCtrl.show)
//
router.post('/basket:basketId/itemId', basketCtrl.update)
router.delete('/', basketCtrl.delete)
// should be create?
// router.add('/', basketCtrl.add)

module.exports = router
