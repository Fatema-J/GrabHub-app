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
    res.redirect(`/restaurants/${restaurant._id}`) //${updatedBasket._id}
  } catch (err) {
    console.error(err)
  }
}
async function deleteItem(req, res) {
  // /baskets/:basketsId/ordered-item/:itemId

  const basket = await Basket.findOne({
    'orderedItems._id': req.params.basketsId
  })
  // if (!basket) return res.redirect('/baskets')
  basket.orderedItems.remove(req.params.itemId)
  console.log('??????')
  await basket.save()
  res.redirect(`/baskets/${basket._id}`)
}

// delete ,clear ordered items only

// async function deleteItem(req, res) {
//   try {
//     await Basket.findById(req.params.id)

//     res.render(`basket/${orderedItems._id}`)

//   } catch (err) {
//     console.log(err)
//   }
// }

// const deleteItem = (req, res) => {
//   Basket.deleteOne(req.params.id)
//   res.redirect('/baskets')
//   console.log('delete item')
// }

module.exports = {
  create,
  delete: deleteItem
}
