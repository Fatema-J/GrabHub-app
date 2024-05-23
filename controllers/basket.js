const Basket = require('../models/basket')
modeule.exports = {
  index
}

module.exports = {}

async function index(req, res) {
  const basket = await Basket.find({})
  res.render('basket/index', {
    title: 'Basket',
    basket
  })
}
