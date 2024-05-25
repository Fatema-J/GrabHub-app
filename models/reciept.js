const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recieptSchema = new Schema({
  name: {
    type: {type: string , price:number},
    required: true,
    unique: true,
    amount: number
  }
  
}, {
  timestamps: true
});

module.exports = mongoose.model('Reciept', recieptSchema);