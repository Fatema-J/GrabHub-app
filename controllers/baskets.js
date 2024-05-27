const Basket = require('../models/basket')

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
    const baskets = await Basket.find({})
    res.render('baskets/show', {
      title: 'Basket',
      baskets
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

