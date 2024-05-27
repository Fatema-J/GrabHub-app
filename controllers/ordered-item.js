const Basket = require('../models/basket');
const Restaurant = require('../models/restaurant');
const User = require('../models/user')



//create new ordered item
const create = async  (req, res) => {
  try {
    console.log('creating ordered item');

    console.log(req.body)
    // add the ordered item
    const basket = await Basket.findById(req.params.id)
    basket.orderedItems.push(req.body);
    const updatedBasket = await basket.save()

    const restaurant = await Restaurant.findOne({menu: req.body.dish})
    //redirect to the restaurant show
    res.redirect(`/restaurants/${restaurant._id}`) //${updatedBasket._id}
  } catch (err) {
    console.error(err)
  }
}

module.exports = {
  create
}
