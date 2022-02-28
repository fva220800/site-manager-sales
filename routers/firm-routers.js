const express = require('express')
const {
  getFirms,
  getAddFirm,
  addFirm,
  deleteFirm,
  getEditFirm,
  editFirm,
} = require('../controllers/firm-controller')

const router = express.Router()

router.get('/firms', getFirms)
router.get('/firms/add', getAddFirm)
router.post('/firms/add', addFirm)
router.delete('/firms/:id', deleteFirm)
router.get('/firms/edit/:id', getEditFirm)
router.put('/firms/edit/:id', editFirm)

module.exports = router
