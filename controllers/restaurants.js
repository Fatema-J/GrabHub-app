const Restaurant = require('../models/restaurant')
const mongodb = require('mongodb')
const { ObjectId } = mongodb

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
  const dishes = restaurant.menu
  console.log(restaurant.menu);
  

  res.render('restaurants/show', { title: restaurant.name, restaurant, categories })
}

module.exports = {
  index,
  show
}
