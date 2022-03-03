const Client = require('../models/client');
const createPath = require('../helpers/create-path');

const fs = require('fs');

const handleError = (res, error) => {
  fs.writeFile('../error.txt', error.stack, (err) => {
    err ? console.log(err) : null;
  });
  console.log(error)
  res.render(createPath('error'), { error })
}

const getClients = (req, res) => {
  Client.find()
    .then((clients) =>
      res.render(createPath('index', 'clients'), {
        clients,
        page: 'index',
        folder: 'clients',
        title: 'Клиенты',
      })
    )
    .catch((error) => handleError(res, error))
}

const getAddClient = (req, res) => {
  Client.find()
    .then((clients) =>
      res.render(createPath('add', 'clients'), {
        clients,
        page: 'add',
        folder: 'clients',
        title: 'Добавление клиента',
      })
    )
    .catch((error) => handleError(res, error))
}

const addClient = (req, res) => {
  const { firm_id, surname, firstname, patronymic, expence_id } = req.body

  const client = new Client({ firm_id, surname, firstname, patronymic, expence_id })

  client
    .save()
    .then((result) => res.redirect('/clients'))
    .catch((error) => handleError(res, error))
}

const deleteClient = (req, res) => {
  Client.findByIdAndDelete(req.params.id)
    .then((result) => res.sendStatus(200))
    .catch((error) => handleError(res, error))
}

const getEditClient = (req, res) => {
  Promise.all([Client.find(), Client.findById(req.params.id)])
    .then((results) => {
      const [clients, client] = results

      res.render(createPath('edit', 'clients'), {
        clients,
        client,
        page: 'edit',
        folder: 'clients',
        title: 'Редактирование клиента',
      })
    })
    .catch((error) => handleError(res, error))
}

const editClient = (req, res) => {
  const { firm_id, surname, firstname, patronymic, expence_id } = req.body
  const { id } = req.params
  Client.findByIdAndUpdate(id, { firm_id, surname, firstname, patronymic, expence_id })
    .then((result) => res.redirect('/clients'))
    .catch((error) => handleError(res, error))
}

module.exports = {
  getClients,
  getAddClient,
  addClient,
  deleteClient,
  getEditClient,
  editClient,
}
