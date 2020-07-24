const { Router } = require('express')
const routes = Router()
const FilesExport = require('./controllers/FilesExportController')

routes.get('/downloads/csv', FilesExport.downloadCsv)

module.exports = routes
