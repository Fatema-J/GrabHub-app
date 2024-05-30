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
  price: Number
})

module.exports = mongoose.model('Dish', dishSchema)
