const { createSearchIndex } = require('../models/dish')
const { Reciept } = require('../models/reciept')

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
    console.log('===========')
    reciept.orderedDishes.push(req.body)
    //reciept.totalamount = totalamount()
    reciept.userId = req.user
    const updatedReceipt = await reciept.save()

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
