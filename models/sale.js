const mongoose = require('mongoose')
const Schema = mongoose.Schema

const saleSchema = new Schema({
  client: {
    type: String,
  },
  product: {
    type: String,
  },
  count: {
    type: String,
  },
  price: {
    type: String,
  },
  date: {
    type: String,
  },
})

const Sale = mongoose.model('Sale', saleSchema)

module.exports = Sale
