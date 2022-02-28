const Expence = require('../models/expence')
const createPath = require('../helpers/create-path')

const fs = require('fs')

const handleError = (res, error) => {
  fs.writeFile('../error.txt', error.stack, (err) => {
    err ? console.log(err) : null
  })
  console.log(error)
  res.render(createPath('error'), { error })
}

const getExpences = (req, res) => {
  Expence.find()
    .then((expences) =>
      res.render(createPath('index', 'expences'), {
        expences,
        page: 'index',
        folder: 'expences',
        title: 'Расходы',
      })
    )
    .catch((error) => handleError(res, error))
}

const getAddExpence = (req, res) => {
  Expence.find()
    .then((expences) =>
      res.render(createPath('add', 'expences'), {
        expences,
        page: 'add',
        folder: 'expences',
        title: 'Добавление расходы',
      })
    )
    .catch((error) => handleError(res, error))
}

const addExpence = (req, res) => {
  const { work_id, price, pay } = req.body

  const expence = new Expence({ work_id, price, pay })

  expence
    .save()
    .then((result) => res.redirect('/expences'))
    .catch((error) => handleError(res, error))
}

const deleteExpence = (req, res) => {
  Expence.findByIdAndDelete(req.params.id)
    .then((result) => res.sendStatus(200))
    .catch((error) => handleError(res, error))
}

const getEditExpence = (req, res) => {
  Promise.all([Expence.find(), Expence.findById(req.params.id)])
    .then((results) => {
      const [expences, expence] = results

      res.render(createPath('edit', 'expences'), {
        expences,
        expence,
        page: 'edit',
        folder: 'expences',
        title: 'Редактирование расхода',
      })
    })
    .catch((error) => handleError(res, error))
}

const editExpence = (req, res) => {
  const { work_id, price, pay } = req.body
  const { id } = req.params
  Expence.findByIdAndUpdate(id, { work_id, price, pay })
    .then((result) => res.redirect('/expences'))
    .catch((error) => handleError(res, error))
}

module.exports = {
  getExpences,
  getAddExpence,
  addExpence,
  deleteExpence,
  getEditExpence,
  editExpence,
}
