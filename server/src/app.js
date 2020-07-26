const express = require('express')
const routes = require('./routes')
const parseConnection = require('./database/parseConnection')

const app = express()

parseConnection.parseInitialize()

app.use(express.json())
app.use(routes)

module.exports = app
