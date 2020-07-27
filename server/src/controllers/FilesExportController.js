const JsonToCsv = require('../utils/convertToCsv')
const { Parser } = require('json2csv')

module.exports = {
  // This module is responsible for creating and sending the csv file for download
  async downloadCsv (req, res) {
    const data = await JsonToCsv.objectSetup()
    const fields = [
      {
        label: 'Pergunta 1',
        value: 'one'
      },
      {
        label: 'Pergunta 2',
        value: 'two'
      },
      {
        label: 'Pergunta 3',
        value: 'three'
      },
      {
        label: 'Pergunta 4',
        value: 'four'
      },
      {
        label: 'Pergunta 5',
        value: 'five'
      },
      {
        label: 'Pergunta 6',
        value: 'six'
      }
    ]
    const json2csv = new Parser({ fields, delimiter: ';' })
    const csv = json2csv.parse(data)
    res.header('Content-Type', 'text/csv')
    res.status(200)
    res.attachment('answers.csv')
    return res.send(csv)
  }
}
