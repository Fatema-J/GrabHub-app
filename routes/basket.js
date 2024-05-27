const express = require('express')
const router = express.Router()
const basketCtrl = require('../controllers/basket')

// the word '/basket' should be removed or the path will not be correct
router.get('/basket', basketCtrl.show)
//
router.post('/basket/:basketId/itemId', basketCtrl.update)
router.delete('/basket', basketCtrl.delete)
// should be create?
router.post('/', basketCtrl.add)

module.exports = router
