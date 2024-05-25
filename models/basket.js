const mongoose = require('mongoose')
const Schema = mongoose.Schema

// embedded oredered items

const orderedItemSchema = new Schema({
  orderedItem: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
})
// create basket, ebeded ordered item in basket
const basketSchema = new schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  orderedItems: [orderedItemSchema]
})
// adding to basket and removing
// viewing basket
// save basket

module.exports = mongoose.model('Basket', basketSchema)
