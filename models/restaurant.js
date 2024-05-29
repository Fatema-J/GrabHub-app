const { name } = require('ejs')
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const restaurantSchema = new Schema({
  name: String,
  image: String,
  location: String,
  menu: [{ type: Schema.Types.ObjectId, ref: 'Dish' }]
})

module.exports = mongoose.model('Restaurant', restaurantSchema)
