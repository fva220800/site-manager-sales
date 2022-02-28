const express = require('express')
const {
  getClients,
  getAddClient,
  addClient,
  deleteClient,
  getEditClient,
  editClient,
} = require('../controllers/client-controller')

const router = express.Router()

router.get('/clients', getClients)
router.get('/clients/add', getAddClient)
router.post('/clients/add', addClient)
router.delete('/clients/:id', deleteClient)
router.get('/clients/edit/:id', getEditClient)
router.put('/clients/edit/:id', editClient)

module.exports = router
