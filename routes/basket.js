const express = require('express')
const router = express.Router()
const basketCtrl = require('../controllers/basket')

router.get('/basket', basketCtrl.show)
//
router.update('/basket/:basketId/itemId', basketCtrl.update)
router.delete('/basket', basketCtrl.delete)
// should be create?
// router.add('/', basketCtrl.add)

module.exports = router
