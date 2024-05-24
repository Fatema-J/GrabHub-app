const mongoose = require('mongoose')
const Schema = mongoose.Schema

// create basket
const basketSchema = new mongoose.schema({ orderedItems: [orderedItemSchema] })
// adding to basket and removing
// embedded oredered items
const orderedItemSchema = new Schema({
  orderedItem: {
    name: String,
    price: Number
  }
})

// viewing basket
// save basket

module.exports = mongoose.model('Basket', basketSchema)
