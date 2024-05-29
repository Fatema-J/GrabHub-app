const {Reciept} = require('../models/reciept')

async function index(req, res) {
  console.log(req.user)
  const reciepts = await Reciept.find({})
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

module.exports = {
  index,
  show
}
