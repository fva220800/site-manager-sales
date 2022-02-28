const mongoose = require('mongoose')
const Schema = mongoose.Schema

const clientSchema = new Schema({
  firm_id: {
    type: String,
  },
  surname: {
    type: String,
  },
  firstname: {
    type: String,
  },
  patronymic: {
    type: String,
  },
  expence_id: {
    type: String
  }
})

const Client = mongoose.model('Client', clientSchema)

module.exports = Client