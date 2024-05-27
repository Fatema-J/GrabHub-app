const reciept = require('../models/reciept')
const Reciept = require('../models/reciept')

async function index(req, res) {
  console.log(req.user)
  const reciepts = await reciept.find({})
  res.render('reciept/index', { title: 'All reciepts', reciepts })
}

const show = async (req, res) => {
  try {
    const reciept = await Reciept.findById(req.params.id)
    res.render(`reciept/show`, {title: 'Reciepts Details' , reciept})
  } catch (i) {
    console.error(i)
    res.redirect('/reciept/')
  }
}



const newReciept = async (req, res) => {
  try {
    const orderedDishes = req.body;
    const totalAmount = req.body;
    const newOrder = new Receipt({
      orderedDishes,
      totalAmount,
    })
    await newOrder.save();

  }catch (i) {
    console.error(i)
    res.redirect('/reciept/')
  }
}

module.exports = {
  index,
  show,
  newReciept
}