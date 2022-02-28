const mongoose = require('mongoose')
const Schema = mongoose.Schema

const completedworkSchema = new Schema({
  view: {
    type: String,
  },
  price: {
    type: String,
  }
})

const Completedwork = mongoose.model('Completedwork', completedworkSchema)

module.exports = Completedwork