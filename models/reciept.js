const mongoose = require('mongoose')
const Schema = mongoose.Schema

const recieptSchema = new Schema(
  {
    orderedDishes: [{ name: String, price: Number, quantity: Number }],
    totalAmount: Number,
    userId: { type: Schema.Types.ObjectId, ref: 'User' }
  },
  {
    timestamps: true
  }
)
const Reciept = mongoose.model('Reciept', recieptSchema);

module.exports = {
  Reciept,
  recieptSchema
};
