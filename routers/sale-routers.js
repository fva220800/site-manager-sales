const express = require('express')
const {
  getSales,
  getAddSale,
  addSale,
  deleteSale,
  getEditSale,
  editSale,
} = require('../controllers/sale-controller')

const router = express.Router()

router.get('/sales', getSales)
router.get('/sales/add', getAddSale)
router.post('/sales/add', addSale)
router.delete('/sales/:id', deleteSale)
router.get('/sales/edit/:id', getEditSale)
router.put('/sales/edit/:id', editSale)

module.exports = router
