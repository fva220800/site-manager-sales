const express = require('express')
const {
  getExpences,
  getAddExpence,
  addExpence,
  deleteExpence,
  getEditExpence,
  editExpence,
} = require('../controllers/expence-controller')

const router = express.Router()

router.get('/expences', getExpences)
router.get('/expences/add', getAddExpence)
router.post('/expences/add', addExpence)
router.delete('/expences/:id', deleteExpence)
router.get('/expences/edit/:id', getEditExpence)
router.put('/expences/edit/:id', editExpence)

module.exports = router
