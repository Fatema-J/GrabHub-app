const mongoose = require('mongoose')

const Schema = mongoose.Schema

const dishSchema = new Schema({
  Item: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  description: String,
  price: Number,
  imageUrl: {
    type: String,
    required: true}
})

module.exports = mongoose.model('Dish', dishSchema)
