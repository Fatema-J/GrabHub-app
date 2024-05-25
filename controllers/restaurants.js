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
  //keep distinct categories only.
  //source: https://www.geeksforgeeks.org/how-to-get-all-unique-values-remove-duplicates-in-a-javascript-array/
  const categories = Array.from(new Set(allCategories))

  console.log('categories', categories)

  res.render('restaurants/show', {
    title: restaurant.name,
    restaurant,
    categories
  })
}

module.exports = {
  index,
  show
}
