const User = require('../models/user')
const createPath = require('../helpers/create-path')

const handleError = (res, error) => {
  console.log(error)
  res.render(createPath('error'))
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
