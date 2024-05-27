const Restaurant = require('../models/restaurant')
const Dish = require('../models/dish')
const mongodb = require('mongodb')
const { ObjectId } = mongodb

const Basket = require('../models/basket')
const User = require('../models/user')

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
  const restaurant = await Restaurant.findById(req.params.id).populate('menu')

  const dishes = await Dish.find({})

  const restaurantMenu = restaurant.menu
  const user = await User.findById('66542dcde9c6c5b6fea3d99f').populate(
    'basket'
  )
  console.log('user basket id', user.basket._id)
  const basket = await Basket.findById(user.basket._id)

  // console.log(restaurantMenu)
  //   const restaurantDishes = restaurantMenu.map(dish => {
  //     return {name: dish.Item,
  //             category: dish.category,
  //             description: dish.description,
  //             price: dish.price}
  // )};

  // const allCategories = restaurant.menu.map((dish) => dish.category)
  // //keep distinct categories only
  // const categories = Array.from(new Set(allCategories))
  // console.log('categories', categories)
  // const dishes = restaurant.menu
  // console.log(restaurant.menu);

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
