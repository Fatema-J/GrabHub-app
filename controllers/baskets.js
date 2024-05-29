const Basket = require('../models/basket')
const Dish = require('../models/dish')
const receiptCtrl = require('../controllers/reciept')

const add = async (req, res) => {
  const basket = await Basket.find({})
  res.render('basket/add', {
    title: 'Basket',
    basket
  })
}

//order payment function that will clear basket upon successful payment

async function payOrder(req, res) {
  console.log('payOrder controller hit')
  console.log('User:', req.user)

  try {
    receiptId = receiptCtrl.create(
      req.body.totalAmount,
      req.user.basket,
      req.user
    )

    await Basket.findByIdAndUpdate(req.user.basket, {
      $set: { orderedItems: [] }
    })
    res.render('paymentSuccess', { receiptId })
  } catch (error) {
    console.error(error)
    res.status(500).send('Internal Server Error')
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
    const baskets = await Basket.findById(req.user.basket)

    // Use Promise.all to wait for all promises to resolve
    //it returned an array of promises before using it
    // source: https://stackoverflow.com/questions/37576685/using-async-await-with-a-foreach-loop
    const basketdish = await Promise.all(
      baskets.orderedItems.map(async (item) => {
        return await Dish.findById(item.dish)
      })
    )

    //totalamount
    let totalAmount = 0
    for (let i = 0; i < baskets.orderedItems.length; i++) {
      // basketdish.push(baskets.orderedItems)
      totalAmount += baskets.orderedItems[i].quantity * basketdish[i].price
      // console.log(totalAmount)
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
  update: updateBasket,
  payOrder
}
