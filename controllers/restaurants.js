const Restaurant = require('../models/restaurant')
const mongodb = require('mongodb')
const { ObjectId } = mongodb
const Dish = require('../models/dish')

const showDish = async (req, res) => {
  try {
    const restaurantId = req.params.id
    const restaurant = await Restaurant.findById(restaurantId)
      .populate('menu')
      .exec()

    if (!restaurant) {
      return res.status(404).json({ message: 'Restaurant not found' })
    }

    res.json(restaurant.menu) // Return the populated menu
  } catch (err) {
    res.status(500)
  }
}

const index = async (req, res) => {
  const restaurants = await Restaurant.find({})
  res.render('restaurants/index', { title: 'All Restaurants', restaurants })
}

const show = async (req, res) => {
  const restaurant = await Restaurant.findById(req.params.id)

  const allCategories = restaurant.menu.map((dish) => dish.category)
  //keep distinct categories only
  const categories = Array.from(new Set(allCategories))
  console.log('categories', categories)

  console.log(restaurant.menu)

  res.render('restaurants/show', {
    title: restaurant.name,
    restaurant,
    categories
  })
}

module.exports = {
  index,
  show,
  showDish
}
