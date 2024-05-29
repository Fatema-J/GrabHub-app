const {Receipt} = require('../models/receipt')
const Dish = require('../models/dish')
const Basket = require('../models/basket')


async function index(req, res) {
  console.log(req.user)
  const receipts = await Receipt.find({})
  res.render('receipt/index', { title: 'All receipts', receipts })
}



const show = async (req, res) => {
  try {
    const receipt = await Receipt.findById(req.params.id)
    res.render(`receipt/show`, { title: 'Receipts Details', receipt })
  } catch (i) {
    console.error(i)
    res.redirect('/receipt/')
  }
}



const create = async (totalAmount, userBasketId, userId) => {
  try {
    const basket = await Basket.findById(userBasketId)
    console.log(basket);

        // Use Promise.all to wait for all promises to resolve
    //it returned an array of promises before using it
    // source: https://stackoverflow.com/questions/37576685/using-async-await-with-a-foreach-loop
    const dishes = await Promise.all(
      basket.orderedItems.map(async (item) => {
        dishInformation = await Dish.findById(item.dish)
        return {name: dishInformation.Item, price: dishInformation.price, quantity: item.quantity}
      })
    )

    console.log('creating the receipt', dishes);
    
        // Create a new receipt
    const newReceipt = new Receipt({
      orderedDishes: dishes, 
      totalAmount: totalAmount,
      userId: userId._id
    });
    await newReceipt.save();
    const receiptId = newReceipt._id

    userId.receipts.push(newReceipt)
    const updatedUser = await userId.save()

    return receiptId
    // push the receipt to the user
  } catch (err) {
    console.error(err)
  }
}

module.exports = {
  index,
  show,
  create
}
