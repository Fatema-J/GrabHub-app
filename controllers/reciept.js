const reciept = require('../models/reciept')

async function index(req, res) {
  console.log(req.user)
  const reciepts = await reciept.find({})
  res.render('reciepts/index', { title: 'All reciepts', reciepts })
}

const show = async (req, res) => {
  try {
    const reciept = await reciept.findById(req.params.id)
    res.redirect(`/reciept/${reciept._id}`)
  } catch (i) {
    console.error(err)
    res.redirect('/reciept/')
  }
}

module.exports = {
  index,
  show
}
