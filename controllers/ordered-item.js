const Basket = require('../models/basket')
const Restaurant = require('../models/restaurant')
const User = require('../models/user')

//create new ordered item
const create = async (req, res) => {
  try {
    console.log('creating ordered item')

    console.log(req.body)

    // add the ordered item
    const basket = await Basket.findById(req.params.id)
    basket.orderedItems.push(req.body)
    const updatedBasket = await basket.save()

    //find restaurant that has the dish to navugate back to it
    const restaurant = await Restaurant.findOne({ menu: req.body.dish })
    //redirect to the restaurant show
    res.redirect(`/restaurants/${restaurant._id}`)
  } catch (err) {
    console.error(err)
  }
}

const update = async (req, res) => {
  try {
    // /baskets/:basketId/:itemId

    //find the basket
    const basket = await Basket.findById(req.params.basketId)

    //find the ordereditems
    const orderedItem = await basket.orderedItems.id(req.params.itemId)
    console.log(' OUR ITEM: ', orderedItem)
  } catch (error) {
    console.error(error)
  }
}

module.exports = {
  create,
  update
}
