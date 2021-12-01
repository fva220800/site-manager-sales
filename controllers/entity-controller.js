const Entity = require('../models/entity')
const createPath = require('../helpers/create-path')

const fs = require('fs')

const handleError = (res, error) => {
  fs.writeFile('../error.txt', error.stack, (err) => {
    err ? console.log(err) : null
  })
  console.log(error)
  res.render(createPath('error'), { error })
}

const getEntities = (req, res) => {
  Entity.find()
    .then((entities) =>
      res.render(createPath('index', 'entities'), {
        entities,
        page: 'index',
        folder: 'entities',
        title: 'Клиенты',
      })
    )
    .catch((error) => handleError(res, error))
}

const getAddEntity = (req, res) => {
  Entity.find()
    .then((entities) =>
      res.render(createPath('add', 'entities'), {
        entities,
        page: 'add',
        folder: 'entities',
        title: 'Добавление клиента',
      })
    )
    .catch((error) => handleError(res, error))
}

const addEntity = (req, res) => {
  const { name, number, address } = req.body

  const entity = new Entity({ name, number, address })

  entity
    .save()
    .then((result) => res.redirect('/entities'))
    .catch((error) => handleError(res, error))
}

const deleteEntity = (req, res) => {
  Entity.findByIdAndDelete(req.params.id)
    .then((result) => res.sendStatus(200))
    .catch((error) => handleError(res, error))
}

const getEditEntity = (req, res) => {
  Promise.all([Entity.find(), Entity.findById(req.params.id)])
    .then((results) => {
      const [entities, entity] = results

      res.render(createPath('edit', 'entities'), {
        entities,
        entity,
        page: 'edit',
        folder: 'entities',
        title: 'Добавление клиента',
      })
    })
    .catch((error) => handleError(res, error))
}

const editEntity = (req, res) => {
  const { name, number, address } = req.body
  const { id } = req.params
  Entity.findByIdAndUpdate(id, { name, number, address })
    .then((result) => res.redirect('/entities'))
    .catch((error) => handleError(res, error))
}

module.exports = {
  getEntities,
  getAddEntity,
  addEntity,
  deleteEntity,
  getEditEntity,
  editEntity,
}
