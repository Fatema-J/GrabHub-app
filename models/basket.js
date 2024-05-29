const mongoose = require('mongoose')
const Schema = mongoose.Schema

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
const basketSchema = new Schema({
  orderedItems: [orderedItemSchema],

  userName: String,
  userAvatar: String
})

module.exports = mongoose.model('Basket', basketSchema)
