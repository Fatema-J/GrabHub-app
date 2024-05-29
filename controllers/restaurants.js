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

  const basket = await Basket.findById(req.user.basket)

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
