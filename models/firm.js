const mongoose = require('mongoose')
const Schema = mongoose.Schema

const firmSchema = new Schema({
  name: {
    type: String,
  },
  time: {
    type: String,
  },
  address: {
    type: String,
  },
  surname: {
    type: String,
  },
  firstname: {
    type: String
  },
  patronymic: {
    type: String
  }
})

const Firm = mongoose.model('Firm', firmSchema)

module.exports = Firm