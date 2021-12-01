const Entity = require('../models/entity')
const Individual = require('../models/individual')
const Product = require('../models/product')

const fs = require('fs')

const Sale = require('../models/sale')
const createPath = require('../helpers/create-path')

const handleError = (res, error) => {
  fs.writeFile('../error.txt', error.stack, (err) => {
    err ? console.log(err) : null
  })
  console.log(error)
  res.render(createPath('error'), { error })
}

const getSales = (req, res) => {
  Promise.all([Entity.find(), Individual.find(), Product.find(), Sale.find()])
    .then((results) => {
      const [entities, individuals, products, sales] = results
      res.render(createPath('index', 'sales'), {
        entities,
        individuals,
        products,
        sales,
        page: 'index',
        folder: 'sales',
        title: 'Продажы',
      })
    })
    .catch((error) => handleError(res, error))
}

const getAddSale = (req, res) => {
  Promise.all([Entity.find(), Individual.find(), Product.find()])
    .then((results) => {
      const [entities, individuals, products] = results
      res.render(createPath('add', 'sales'), {
        entities,
        individuals,
        products,
        page: 'add',
        folder: 'sales',
        title: 'Добавление продажы',
      })
    })
    .catch((error) => handleError(res, error))
}

const addSale = (req, res) => {
  const { client, product, count, price, date } = req.body

  const sale = new Sale({ client, product, count, price, date })

  sale
    .save()
    .then((result) => res.redirect('/sales'))
    .catch((error) => handleError(res, error))
}

const deleteSale = (req, res) => {
  Sale.findByIdAndDelete(req.params.id)
    .then((result) => res.sendStatus(200))
    .catch((error) => handleError(res, error))
}

const getEditSale = (req, res) => {
  Promise.all([
    Entity.find(),
    Individual.find(),
    Product.find(),
    Sale.findById(req.params.id),
  ]).then((results) => {
    const [entities, individuals, products, sale] = results
    res.render(createPath('edit', 'sales'), {
      entities,
      individuals,
      products,
      sale,
      page: 'edit',
      folder: 'sales',
      title: 'Редактирование продажы',
    })
  })
}

const editSale = (req, res) => {
  const { client, product, count, price, date } = req.body
  const { id } = req.params
  Sale.findByIdAndUpdate(id, { client, product, count, price, date })
    .then((result) => res.redirect('/sales'))
    .catch((error) => handleError(res, error))
}

module.exports = {
  getSales,
  getAddSale,
  addSale,
  deleteSale,
  getEditSale,
  editSale,
}
