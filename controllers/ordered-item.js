const Basket = require('../models/basket')
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

    res.redirect(`/baskets/${updatedBasket._id}`) //${updatedBasket._id}
  } catch (err) {
    console.error(err)
  }
}
module.exports = {
  create
}
