const express = require('express')
const router = express.Router()
const basketCtrl = require('../controllers/basket')

router.get('/newbas', basketCtrl.new)
router.update('/newbas', basketCtrl.update)

module.exports = router
