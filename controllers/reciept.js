const { Reciept } = require('../models/reciept')
const Basket = require('../models/basket')
const dish = require('../models/dish')

async function index(req, res) {
  console.log(req.user)
  const reciepts = await Reciept.find({})
  res.render('reciept/index', { title: 'All reciepts', reciepts })
}

const show = async (req, res) => {
  try {
    const reciept = await Reciept.findById(req.params.id)
    res.render(`reciept/show`, { title: 'Reciepts Details', reciept })
  } catch (i) {
    console.error(i)
    res.redirect('/reciept/')
  }
}



const newReciept = async (req, res) => {
  try {
    const orderedDishes = req.body;
    const totalAmount = req.body;
    const newOrder = new Reciept({
      orderedDishes,
      totalAmount,
    })
    await newOrder.save();

  }catch (i) {
    console.error(i)
    res.redirect('/reciept/')
  }
}

const create = async (totalAmount, userBasketId, userId) => {
  try {
    console.log({ totalAmount, userBasketId, userId })

    const basket = await Basket.findById(userBasketId)
    console.log('basket', basket)

    // Use Promise.all to wait for all promises to resolve
    //it returned an array of promises before using it
    // source: https://stackoverflow.com/questions/37576685/using-async-await-with-a-foreach-loop
    const dishes = await Promise.all(
      basket.orderedItems.map(async (item) => {
        dishInformation = await dish.findById(item.dish)
        return {
          name: dishInformation.Item,
          price: dishInformation.price,
          quantity: item.quantity
        }
      })
    )

    console.log('creating the receipt', dishes)

    // Create a new receipt
    const newReceipt = new Reciept({
      orderedDishes: dishes,
      totalAmount: totalAmount,
      userId: userId._id
    })
    await newReceipt.save()
    const receiptId = newReceipt._id

    userId.receipts.push(newReceipt)
    const updatedUser = await userId.save()
    console.log({ updatedUser })

    return receiptId
    // push the receipt to the user
  } catch (err) {
    console.error(err)
  }
}

module.exports = {
  index,
  show,
  newReciept
  show,
  create
}