const reciept = require('../models/reciept') 
const dish = require('../models/dish')
const addtoDB = async(req, res) => {
try{
const dish = await Dish.findById(req.params.id);
reciept.resturant.push(req.body.performerId);
await reciept.save()
res.redirect(`/reciept/${reciept._id}`);
} catch(error){
  console.log(error);
    res.redirect('/reciept');
}
}

module.exports = {
  addtoDB
}