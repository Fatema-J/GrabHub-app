const Basket = require('../models/basket')
const Dish = require('../models/dish')
const add = async (req, res) => {
  const basket = await Basket.find({})
  res.render('basket/add'),
    {
      title: 'Basket',
      basket
    }
}
//delete, +if statement
async function deleteBasket(req, res) {
  try {
    await Basket.findById(req.params.id)

    // clear ordered items only

    res.render('basket/deleteBasket')
  } catch (err) {
    console.log(err)
  }
}
const show = async (req, res) => {
  try {
    const baskets = await Basket.findById('6654314fe9c6c5b6fea3d9a1')
    console.log(baskets.orderedItems)

    // Use Promise.all to wait for all promises to resolve
    //it returned an array of promises before using it
    // source: https://stackoverflow.com/questions/37576685/using-async-await-with-a-foreach-loop
    const basketdish = await Promise.all(
      baskets.orderedItems.map(async (item) => {
        return await Dish.findById(item.dish)
      })
    )
    console.log(basketdish)
    //totalamount
    let totalAmount = 0
    for (let i = 0; i < baskets.orderedItems.length; i++) {
      // basketdish.push(baskets.orderedItems)
      totalAmount += baskets.orderedItems[i].quantity * basketdish[i].price
      console.log(totalAmount)
    }

    res.render('baskets/show', {
      title: 'Basket',
      baskets,
      basketdish,
      totalAmount
    })
  } catch (err) {
    console.log(err)
  }
}
// update the basket, +if statement
async function updateBasket(req, res) {
  const basket = await Basket.findById({})
  res.render('basket/updatedBasket')
}
module.exports = {
  show,
  add,
  delete: deleteBasket,
  update: updateBasket
}
