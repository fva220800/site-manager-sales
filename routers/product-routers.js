const express = require('express')
const {
  getProducts,
  getAddProduct,
  addProduct,
  deleteProduct,
  getEditProduct,
  editProduct,
} = require('../controllers/product-controller')

const router = express.Router()

router.get('/products', getProducts)
router.get('/products/add', getAddProduct)
router.post('/products/add', addProduct)
router.delete('/products/:id', deleteProduct)
router.get('/products/edit/:id', getEditProduct)
router.put('/products/edit/:id', editProduct)

module.exports = router
