const mongoose = require('mongoose')
const Schema = mongoose.Schema

// embedded oredered items

const orderedItemSchema = new Schema({
  comments: {
    type: String
  },
  quantity: {
    type: Number,
    required: true
  },
  dish: { type: Schema.Types.ObjectId, ref: 'Dish' }
})

// create basket, embeded ordered item in basket
const basketSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  orderedItems: [orderedItemSchema]
})
// adding to basket and removing
// viewing basket
// save basket

module.exports = mongoose.model('Basket', basketSchema)