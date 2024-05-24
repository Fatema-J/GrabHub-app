const Restaurant = require('../models/restaurant');


const index = async(req, res) =>{
  const restaurants = await Restaurant.find({});
  res.render('restaurants/index', { title: 'All Restaurants', restaurants });
}



module.exports = {
  index,
};