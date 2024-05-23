const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recieptSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('reciept', recieptSchema);