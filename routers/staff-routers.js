const express = require('express')
const {
  getStaffs,
  getAddStaff,
  addStaff,
  deleteStaff,
  getEditStaff,
  editStaff,
} = require('../controllers/staff-controller')

const router = express.Router()

router.get('/staffs', getStaffs)
router.get('/staffs/add', getAddStaff)
router.post('/staffs/add', addStaff)
router.delete('/staffs/:id', deleteStaff)
router.get('/staffs/edit/:id', getEditStaff)
router.put('/staffs/edit/:id', editStaff)

module.exports = router
