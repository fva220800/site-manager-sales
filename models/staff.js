const mongoose = require('mongoose')
const Schema = mongoose.Schema

const staffSchema = new Schema({
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
  position: {
    type: String
  },
  work_id: {
    type: String
  },
  earn: {
    type: String,
  },
  address: {
    type: String
  },
  phone: {
    type: String
  }
})

const Staff = mongoose.model('Staff', staffSchema)

module.exports = Staff