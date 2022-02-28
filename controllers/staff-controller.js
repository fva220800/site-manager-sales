const Staff = require('../models/staff')
const createPath = require('../helpers/create-path')

const fs = require('fs')

const handleError = (res, error) => {
  fs.writeFile('../error.txt', error.stack, (err) => {
    err ? console.log(err) : null
  })
  console.log(error)
  res.render(createPath('error'), { error })
}

const getStaffs = (req, res) => {
  Staff.find()
    .then((staffs) =>
      res.render(createPath('index', 'staffs'), {
        staffs,
        page: 'index',
        folder: 'staffs',
        title: 'Сотрудники',
      })
    )
    .catch((error) => handleError(res, error))
}

const getAddStaff = (req, res) => {
  Staff.find()
    .then((staffs) =>
      res.render(createPath('add', 'staffs'), {
        staffs,
        page: 'add',
        folder: 'staffs',
        title: 'Добавление сотрудника',
      })
    )
    .catch((error) => handleError(res, error))
}

const addStaff = (req, res) => {
  const { firm_id, surname, firstname, patronymic, position, work_id, earn, address, phone } = req.body

  const staff = new Staff({ firm_id, surname, firstname, patronymic, position, work_id, earn, address, phone })

  staff
    .save()
    .then((result) => res.redirect('/staffs'))
    .catch((error) => handleError(res, error))
}

const deleteStaff = (req, res) => {
  Staff.findByIdAndDelete(req.params.id)
    .then((result) => res.sendStatus(200))
    .catch((error) => handleError(res, error))
}

const getEditStaff = (req, res) => {
  Promise.all([Staff.find(), Staff.findById(req.params.id)])
    .then((results) => {
      const [staffs, staff] = results

      res.render(createPath('edit', 'staffs'), {
        staffs,
        staff,
        page: 'edit',
        folder: 'staffs',
        title: 'Редактирование сотрудника',
      })
    })
    .catch((error) => handleError(res, error))
}

const editStaff = (req, res) => {
  const { firm_id, surname, firstname, patronymic, position, work_id, earn, address, phone } = req.body
  const { id } = req.params
  Staff.findByIdAndUpdate(id, { firm_id, surname, firstname, patronymic, position, work_id, earn, address, phone })
    .then((result) => res.redirect('/staffs'))
    .catch((error) => handleError(res, error))
}

module.exports = {
  getStaffs,
  getAddStaff,
  addStaff,
  deleteStaff,
  getEditStaff,
  editStaff,
}
