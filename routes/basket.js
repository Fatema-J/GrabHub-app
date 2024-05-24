const express = require('express')
const router = express.Router()
const basketCtrl = require('../controllers/basket')

router.get('/new', basketCtrl.new)
router.update('/new', basketCtrl.update)

module.exports = router
