const Basket = require('../models/basket')
modeule.exports = {
  show,
  add,
  deleteBasket,
  updateBasket
}
// add to basket
async function add(req, res) {
  const basket = await Basket.find({})
  res.render('basket/add', {
    title: 'Basket',
    basket
  })
}
//delete
async function deleteBasket(req, res) {
  try {
    await Basket.findByIdAndDeleter(req.params.id)
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

// update the basket
async function updateBasket(req, res) {
  const basket = await Basket.find({})
  res.render('basket/updatedBasket', {
    title: 'Basket',
    basket
  })
}
