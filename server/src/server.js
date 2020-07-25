const express = require('express')
const routes = require('./routes')
const parseConnection = require('./parseConnection')

const app = express()

parseConnection.parseInitialize()

app.use(express.json())
app.use(routes)

app.listen(3333)
