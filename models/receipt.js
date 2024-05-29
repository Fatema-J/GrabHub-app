const mongoose = require('mongoose')
const Schema = mongoose.Schema

const receiptSchema = new Schema(
  {
    orderedDishes: [{ name: String, price: Number, quantity: Number }],
    totalAmount: Number,
    userId: { type: Schema.Types.ObjectId, ref: 'User' }
  },
  {
    timestamps: true
  }
)
const Receipt = mongoose.model('Receipt', receiptSchema)

module.exports = {
  Receipt,
  receiptSchema
}
