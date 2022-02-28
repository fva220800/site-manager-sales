const express = require('express')
const {
  getCompletedworks,
  getAddCompletedwork,
  addCompletedwork,
  deleteCompletedwork,
  getEditCompletedwork,
  editCompletedwork,
} = require('../controllers/completedwork-controller')

const router = express.Router()

router.get('/completedworks', getCompletedworks)
router.get('/completedworks/add', getAddCompletedwork)
router.post('/completedworks/add', addCompletedwork)
router.delete('/completedworks/:id', deleteCompletedwork)
router.get('/completedworks/edit/:id', getEditCompletedwork)
router.put('/completedworks/edit/:id', editCompletedwork)

module.exports = router
