const express = require('express')
const routes = require('./routes')
const Parse = require('parse/node')

const app = express()

// Parse Initialization
Parse.initialize('Jl21MbJjOzHoq3eNjK0dY1cuRyQnOeu1GNIGQpY3', 'Aqy19HFsorwxIhCC3E9IYBQh8WBnkdoMGOdEaYPe')
Parse.serverURL = 'https://parseapi.back4app.com/'

app.use(express.json())
app.use(routes)

app.listen(3333)
