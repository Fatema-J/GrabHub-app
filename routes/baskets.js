const express = require('express')
const router = express.Router()
const basketCtrl = require('../controllers/baskets')

router.get('/', basketCtrl.show)

//
// router.post('/basket:basketId/itemId', basketCtrl.update)


router.post('/baskets/:id/itemId', basketCtrl.update)

router.delete('/', basketCtrl.delete)

router.post('/', basketCtrl.add)

module.exports = router
