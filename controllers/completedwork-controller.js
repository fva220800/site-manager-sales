const Completedwork = require('../models/completedwork')
const createPath = require('../helpers/create-path')

const fs = require('fs')

const handleError = (res, error) => {
  fs.writeFile('../error.txt', error.stack, (err) => {
    err ? console.log(err) : null
  })
  console.log(error)
  res.render(createPath('error'), { error })
}

const getCompletedworks = (req, res) => {
  Completedwork.find()
    .then((completedworks) =>
      res.render(createPath('index', 'completedworks'), {
        completedworks,
        page: 'index',
        folder: 'completedworks',
        title: 'Выполненные работы',
      })
    )
    .catch((error) => handleError(res, error))
}

const getAddCompletedwork = (req, res) => {
  Completedwork.find()
    .then((completedworks) =>
      res.render(createPath('add', 'completedworks'), {
        completedworks,
        page: 'add',
        folder: 'completedworks',
        title: 'Добавление работы',
      })
    )
    .catch((error) => handleError(res, error))
}

const addCompletedwork = (req, res) => {
  const { view, price } = req.body

  const completedwork = new Completedwork({ view, price })

  completedwork
    .save()
    .then((result) => res.redirect('/completedworks'))
    .catch((error) => handleError(res, error))
}

const deleteCompletedwork = (req, res) => {
  Completedwork.findByIdAndDelete(req.params.id)
    .then((result) => res.sendStatus(200))
    .catch((error) => handleError(res, error))
}

const getEditCompletedwork = (req, res) => {
  Promise.all([Completedwork.find(), Completedwork.findById(req.params.id)])
    .then((results) => {
      const [completedworks, completedwork] = results

      res.render(createPath('edit', 'completedworks'), {
        completedworks,
        completedwork,
        page: 'edit',
        folder: 'completedworks',
        title: 'Редактирование работы',
      })
    })
    .catch((error) => handleError(res, error))
}

const editCompletedwork = (req, res) => {
  const { view, price } = req.body
  const { id } = req.params
  Completedwork.findByIdAndUpdate(id, { view, price })
    .then((result) => res.redirect('/completedworks'))
    .catch((error) => handleError(res, error))
}

module.exports = {
  getCompletedworks,
  getAddCompletedwork,
  addCompletedwork,
  deleteCompletedwork,
  getEditCompletedwork,
  editCompletedwork,
}
