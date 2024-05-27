const Dishes = require('../models/dish')
const Restaurant = require('../models/restaurant')

const addToRestaurant = async (req, res) => {
  try {
    const restaurant = await Restaurant.findById(req.params.id)

    restaurant.menu._id
  } catch (error) {
    console.log(error)
    res.redirect('/restaurants')
  }
}

module.exports = {
  addToRestaurant
}
