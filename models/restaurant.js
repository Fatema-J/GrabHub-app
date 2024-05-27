const { name } = require('ejs')
const mongoose = require('mongoose')
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema

const userSchema = new Schema(
  {
    name: String
  },
  {
    timestamps: true
  }
)


const restaurantSchema = new Schema({
  name: String,
  location: String,
  menu: [{ type: Schema.Types.ObjectId, ref: 'Dish' }]

})

// Compile the schema into a model and export it
module.exports = mongoose.model('Restaurant', restaurantSchema)
