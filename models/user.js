const mongoose = require('mongoose')
const Schema = mongoose.Schema
const { receiptSchema } = require('./receipt')

const userSchema = new Schema(
  {
    name: String,
    basket: { type: Schema.Types.ObjectId, ref: 'Basket' },
    receipts: [receiptSchema],
    googleId: {
      type: String,
      required: true
    },
    email: String,
    avatar: String
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('User', userSchema)
