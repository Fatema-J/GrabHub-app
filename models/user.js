const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { recieptSchema } = require('./reciept')

const userSchema = new Schema({
  name: String,
  basket: { type: Schema.Types.ObjectId, ref: 'Basket' },
  receipts: [recieptSchema]
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);