const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
  name: {
    type: String,
  },
  count: {
    type: String,
  },
  price: {
    type: String,
  },
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product