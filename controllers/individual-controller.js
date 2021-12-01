const Individual = require('../models/individual')
const createPath = require('../helpers/create-path')

const handleError = (res, error) => {
  console.log(error)
  res.render(createPath('error'))
}

const getIndividuals = (req, res) => {
  Individual.find()
    .then((individuals) =>
      res.render(createPath('index', 'individuals'), {
        individuals,
        page: 'index',
        folder: 'individuals',
        title: 'Клиенты',
      })
    )
    .catch((error) => handleError(res, error))
}

const getAddIndividual = (req, res) => {
  Individual.find()
    .then((individuals) =>
      res.render(createPath('add', 'individuals'), {
        individuals,
        page: 'add',
        folder: 'individuals',
        title: 'Добавление клиента',
      })
    )
    .catch((error) => handleError(res, error))
}

const addIndividual = (req, res) => {
  const { name, date, number, address } = req.body

  const individual = new Individual({ name, date, number, address })

  individual
    .save()
    .then((result) => res.redirect('/individuals'))
    .catch((error) => handleError(res, error))
}

const deleteIndividual = (req, res) => {
  Individual.findByIdAndDelete(req.params.id)
    .then((result) => res.sendStatus(200))
    .catch((error) => handleError(res, error))
}

const getEditIndividual = (req, res) => {
  Promise.all([Individual.find(), Individual.findById(req.params.id)])
    .then((results) => {
      const [individuals, individual] = results

      res.render(createPath('edit', 'individuals'), {
        individuals,
        individual,
        page: 'edit',
        folder: 'individuals',
        title: 'Редактирование клиента',
      })
    })
    .catch((error) => handleError(res, error))
}

const editIndividual = (req, res) => {
  const { name, date, number, address } = req.body
  const { id } = req.params
  Individual.findByIdAndUpdate(id, { name, date, number, address })
    .then((result) => res.redirect('/individuals'))
    .catch((error) => handleError(res, error))
}

module.exports = {
  getIndividuals,
  getAddIndividual,
  addIndividual,
  deleteIndividual,
  getEditIndividual,
  editIndividual,
}
