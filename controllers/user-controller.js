const User = require('../models/user')
const createPath = require('../helpers/create-path')

const fs = require('fs')

const handleError = (res, error) => {
  fs.writeFile('../error.txt', error.stack, (err) => {
    err ? console.log(err) : null
  })
  console.log(error)
  res.render(createPath('error'), { error })
}

const getUsers = (req, res) => {
  User.find()
    .then((users) =>
      res.render(createPath('index', 'users'), {
        users,
        page: 'index',
        folder: 'users',
        title: 'Вход',
      })
    )
    .catch((error) => handleError(res, error))
}

module.exports = {
  getUsers,
}
