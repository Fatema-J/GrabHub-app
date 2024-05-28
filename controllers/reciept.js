const Reciept = require('../models/reciept')

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

const create = async (req, res) => {
  try {
    // add the receipt
    const reciept = await Reciept.findById(req.params.id)
    reciept.orderedDishes.push(req.body)
    const updatedReceipt = await reciept.save()

    //find restaurant that has the dish to navugate back to it
    // const restaurant = await Restaurant.findOne({ menu: req.body.dish })
    //redirect to the reciept show
    res.redirect(`/reciept/${reciept._id}`) //${updatedBasket._id}
  } catch (err) {
    console.error(err)
  }
}
module.exports = {
  index,
  show,
  create
}
