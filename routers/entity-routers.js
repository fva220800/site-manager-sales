const express = require('express')
const {
  getEntities,
  getAddEntity,
  addEntity,
  deleteEntity,
  getEditEntity,
  editEntity,
} = require('../controllers/entity-controller')

const router = express.Router()

router.get('/entities', getEntities)
router.get('/entities/add', getAddEntity)
router.post('/entities/add', addEntity)
router.delete('/entities/:id', deleteEntity)
router.get('/entities/edit/:id', getEditEntity)
router.put('/entities/edit/:id', editEntity)

module.exports = router
