const path = require('path')

const createPath = (page, folder = '') =>
  folder != ''
    ? path.resolve(__dirname, `../views/${folder}`, `${page}.ejs`)
    : path.resolve(__dirname, `../views`, `${page}.ejs`)

module.exports = createPath
