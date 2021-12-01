const mongoose = require('mongoose')
const Schema = mongoose.Schema

const entitySchema = new Schema({
  name: {
    type: String,
  },
  number: {
    type: String,
  },
  address: {
    type: String,
  },
})

const Entity = mongoose.model('Entity', entitySchema)

module.exports = Entity
