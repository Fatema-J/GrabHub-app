const Basket = require('../models/basket')

async function create(req, res) {
  try {
    // find the basket
    const basket = await Basket.findById(req.params.id)
    // add the ordered item
    basket.orderedItems.push(req.body)
    // save
    const updatedBasket = await basket.save()
    res.redirect(`/baskets/$(updatedBasket._id)`)
  } catch (err) {
    console.error(err)
  }
}
module.exports = {
  create
}
