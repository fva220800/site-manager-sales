const fs = require('fs')

const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const createPath = require('./helpers/create-path')

const userRouters = require('./routers/user-routers')
const firmRouters = require('./routers/firm-routers')
const clientRouters = require('./routers/client-routers')
const completedworkRouters = require('./routers/completedwork-routers')
const expenceRouters = require('./routers/expence-routers')
const staffRouters = require('./routers/staff-routers')

const app = express()

app.set('view engine', 'ejs')

mongoose
  .connect(
    'mongodb+srv://fva220800:feof7980@cluster0.r71rc.mongodb.net/site-manager-sales?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then((res) => console.log('Connected to DB'))
  .catch((error) => console.log(error))

let PORT = process.env.PORT || 3000

app.listen(PORT, (error) => {
  error ? console.log(error) : console.log(`Listening port ${PORT}`)
})

app.use(express.urlencoded({ extended: false }))

app.use(
  morgan(':method : url :status :res[content-length] - :response-time ms')
)

app.use(express.static('static'))

app.use(methodOverride('_method'))

app.get('/', (req, res) => {
  res.status(301).redirect('/users')
})

app.use(userRouters)
app.use(firmRouters)
app.use(clientRouters)
app.use(completedworkRouters)
app.use(expenceRouters)
app.use(staffRouters)

app.use((req, res) => {
  res.status(404).render(createPath('error'), { error })
})
