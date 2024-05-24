const mongoose = require('mongoose')
const Schema = mongoose.Schema

// create basket
const basketSchema = new mongoose.schema({})
// adding to basket and removing
// embedded oredered items
const ordereditemSchema = new Schema(
  {
    content: {
      type: String,
      require
    }
  },
  {
    timestamps: true
  }
)

// viewing basket
// save basket
