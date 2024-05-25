const mongoose = require('mongoose')
const Schema = mongoose.Schema

const recieptSchema = new Schema(
  {
    orderedDishes: {
      name: String,
      price: Number
    }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Reciept', recieptSchema)
