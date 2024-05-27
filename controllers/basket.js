const Basket = require('../models/basket')
module.exports = {
  show,
  add,
  delete: deleteBasket,
  update: updateBasket
}
// add from ordered items to basket, +if statement
async function add(req, res) {
  const basket = await Basket.find({})
  res.render('basket/add', {
    title: 'Basket',
    basket
  })
}
//delete, +if statement
async function deleteBasket(req, res) {
  try {
    await Basket.findById(req.params.id)
    res.render('basket/deleteBasket')
  } catch (err) {
    console.log(err)
    res.status(500).send('Error delete basket')
  }
}

// to see the ordered items in the basket
async function show(req, res) {
  const basket = await Basket.find({})
  res.render('basket/show', {
    title: 'Basket',
    basket
  })
}

// update the basket, +if statement
async function updateBasket(req, res) {
  const user = await User.findById('66542dcde9c6c5b6fea3d99f')
  console.log(user)
  const basket = await Basket.find({})
  res.render('basket/updatedBasket')
}
