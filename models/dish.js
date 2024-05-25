const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const dishSchema = new Schema ({
  Item: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  description: String,
  price: Number
})

// Compile the schema into a model and export it
module.exports = mongoose.model('Dish', dishSchema);