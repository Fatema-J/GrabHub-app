const Basket = require('../models/basket')
const Restaurant = require('../models/restaurant')
const User = require('../models/user')

//create new ordered item
const create = async (req, res) => {
  try {
    console.log('creating ordered item')

    // add the ordered item
    const basket = await Basket.findById(req.user.basket)
    basket.orderedItems.push(req.body)
    const updatedBasket = await basket.save()

    //find restaurant that has the dish to navugate back to it
    const restaurant = await Restaurant.findOne({ menu: req.body.dish })
    //redirect to the restaurant show
    res.redirect(`/restaurants/${restaurant._id}`) //${updatedBasket._id}
  } catch (err) {
    console.error(err)
  }
}

const update = async (req, res) => {
  try {
    //find the basket
    const basket = await Basket.findById(req.user.basket)

    //find the ordereditems
    const orderedItem = basket.orderedItems.id(req.params.itemId)
    orderedItem.quantity = req.body.quantity

    const updatedBasket = await basket.save()

    res.redirect(`/baskets`) // /${updatedBasket._id}
  } catch (error) {
    console.error(error)
  }
}
async function deleteItem(req, res) {
  // /baskets/:basketsId/ordered-item/:itemId
  console.log('??????????????????????')
  console.log('basket id:', req.params.basketsId)
  const basket = await Basket.updateOne(
    { _id: req.params.basketsId },
    { $pull: { orderedItems: { _id: req.params.itemId } } }
  )

  console.log('result', basket)
  if (!basket) return res.redirect('/baskets')
  // basket.orderedItems.remove(req.params.itemId)

  // await basket.save()
  res.redirect(`/baskets`)
}
module.exports = {
  create,
  delete: deleteItem,
  update
}
