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

//order payment function that will clear basket upon successful payment
async function payOrder(req,res){

  try {
    await Basket.findByIdAndUpdate(req.user.basket, {$set: {orderedItems: [] }})
    res.render('paymentSuccess')
  } catch (error){
    console.error(error); 
    res.status(500).send('Internal Server Error')
  }
}; 
 


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
    const basketdish = await Promise.all(baskets.orderedItems.map(async (item) => {
      return await Dish.findById(item.dish)
    }))

    console.log(basketdish);
    



=========
    const basketdish = []
    baskets.orderedItems.forEach(async (item) => {
      console.log(item.dish)
      basketdish.push(await Dish.findById(item.dish))
    })
    //await Dish.findById(baskets.orderedItems[0].dish)
    console.log('=============================')
    console.log(basketdish)
>>>>>>>>> Temporary merge branch 2
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
  update: updateBasket, 
  payOrder
}
