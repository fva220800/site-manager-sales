const Product = require('../models/product')
const createPath = require('../helpers/create-path')

const fs = require('fs')

const handleError = (res, error) => {
  fs.writeFile('../error.txt', error.stack, (err) => {
    err ? console.log(err) : null
  })
  console.log(error)
  res.render(createPath('error'), { error })
}

const getProducts = (req, res) => {
  Product.find()
    .then((products) =>
      res.render(createPath('index', 'products'), {
        products,
        page: 'index',
        folder: 'products',
        title: 'Продукты',
      })
    )
    .catch((error) => handleError(res, error))
}

const getAddProduct = (req, res) => {
  res.render(createPath('add', 'products'), {
    page: 'add',
    folder: 'products',
    title: 'Добавление продукта',
  })
}

const addProduct = (req, res) => {
  const { name, count, price } = req.body

  const product = new Product({ name, count, price })

  product
    .save()
    .then((result) => res.redirect('/products'))
    .catch((error) => handleError(res, error))
}

const deleteProduct = (req, res) => {
  Product.findByIdAndDelete(req.params.id)
    .then((result) => res.sendStatus(200))
    .catch((error) => handleError(res, error))
}

const getEditProduct = (req, res) => {
  Product.findById(req.params.id)
    .then((product) =>
      res.render(createPath('edit', 'products'), {
        product,
        page: 'edit',
        folder: 'products',
        title: 'Редактирование продукта',
      })
    )
    .catch((error) => handleError(res, error))
}

const editProduct = (req, res) => {
  const { name, count, price } = req.body
  const { id } = req.params
  Product.findByIdAndUpdate(id, { name, count, price })
    .then((result) => res.redirect('/products'))
    .catch((error) => handleError(res, error))
}

module.exports = {
  getProducts,
  getAddProduct,
  addProduct,
  deleteProduct,
  getEditProduct,
  editProduct,
}
