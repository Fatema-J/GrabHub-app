const Restaurant = require('../models/restaurant')
const Dish = require('../models/dish')
const mongodb = require('mongodb')
const { ObjectId } = mongodb
const Basket = require('../models/basket')
const User = require('../models/user')

const index = async (req, res) => {
  const restaurants = await Restaurant.find({})

  res.render('restaurants/index', { title: 'All Restaurants', restaurants })
}

const show = async (req, res) => {
  const restaurant = await Restaurant.findById(req.params.id).populate('menu')

  const dishes = await Dish.find({})

  const restaurantMenu = restaurant.menu
  const user = await User.findById('66542dcde9c6c5b6fea3d99f').populate(
    'basket'
  )
  console.log('user basket id', user.basket._id)
  const basket = await Basket.findById(user.basket._id)

  // const allCategories = restaurant.menu.map((dish) => dish.category)
  // //keep distinct categories only
  // const categories = Array.from(new Set(allCategories))
  // const dishes = restaurant.menu

  res.render('restaurants/show', {
    title: restaurant.name,
    restaurant,
    restaurantMenu,
    basket
  })
}

module.exports = {
  index,
  show
}
