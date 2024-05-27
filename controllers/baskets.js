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
    res.render('basket/deleteBasket')
  } catch (err) {
    console.log(err)
  }
}

const show = async (req, res) => {
  try {
    const baskets = await Basket.findById('6654314fe9c6c5b6fea3d9a1')
    console.log(baskets.orderedItems)
    const basketdish = await Dish.findById(baskets.orderedItems[0].dish)
    console.log(basketdish)
    res.render('baskets/show', {
      title: 'Basket',
      baskets,
      basketdish
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
