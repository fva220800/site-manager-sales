const mongoose = require('mongoose')
const Schema = mongoose.Schema

const individualSchema = new Schema({
  name: {
    type: String,
  },
  date: {
    type: String,
  },
  number: {
    type: String,
  },
  address: {
    type: String,
  },
})

const Individual = mongoose.model('Individual', individualSchema)

module.exports = Individual
