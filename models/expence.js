const mongoose = require('mongoose')
const Schema = mongoose.Schema

const expenceSchema = new Schema({
  work_id: {
    type: String,
  },
  price: {
    type: String,
  },
  pay: {
    type: String,
  }
})

const Expence = mongoose.model('Expence', expenceSchema)

module.exports = Expence