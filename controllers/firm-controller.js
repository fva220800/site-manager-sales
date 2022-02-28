const Firm = require('../models/firm')
const createPath = require('../helpers/create-path')

const fs = require('fs')

const handleError = (res, error) => {
  fs.writeFile('../error.txt', error.stack, (err) => {
    err ? console.log(err) : null
  })
  console.log(error)
  res.render(createPath('error'), { error })
}

const getFirms = (req, res) => {
  Firm.find()
    .then((firms) =>
      res.render(createPath('index', 'firms'), {
        firms,
        page: 'index',
        folder: 'firms',
        title: 'Фирмы',
      })
    )
    .catch((error) => handleError(res, error))
}

const getAddFirm = (req, res) => {
  Firm.find()
    .then((firms) =>
      res.render(createPath('add', 'firms'), {
        firms,
        page: 'add',
        folder: 'firms',
        title: 'Добавление фирмы',
      })
    )
    .catch((error) => handleError(res, error))
}

const addFirm = (req, res) => {
  const { name, time, address, surname, firstname, patronymic } = req.body

  const firm = new Firm({ name, time, address, surname, firstname, patronymic })

  firm
    .save()
    .then((result) => res.redirect('/firms'))
    .catch((error) => handleError(res, error))
}

const deleteFirm = (req, res) => {
  Firm.findByIdAndDelete(req.params.id)
    .then((result) => res.sendStatus(200))
    .catch((error) => handleError(res, error))
}

const getEditFirm = (req, res) => {
  Promise.all([Firm.find(), Firm.findById(req.params.id)])
    .then((results) => {
      const [firms, firm] = results

      res.render(createPath('edit', 'firms'), {
        firms,
        firm,
        page: 'edit',
        folder: 'firms',
        title: 'Редактирование фирмы',
      })
    })
    .catch((error) => handleError(res, error))
}

const editFirm = (req, res) => {
  const { name, time, address, surname, firstname, patronymic } = req.body
  const { id } = req.params
  Firm.findByIdAndUpdate(id, { name, time, address, surname, firstname, patronymic })
    .then((result) => res.redirect('/firms'))
    .catch((error) => handleError(res, error))
}

module.exports = {
  getFirms,
  getAddFirm,
  addFirm,
  deleteFirm,
  getEditFirm,
  editFirm,
}
