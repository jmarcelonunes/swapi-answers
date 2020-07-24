const JsonToCsv = require('../utils/convertToCsv')

module.exports = {
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

    return JsonToCsv.csvCreator(res, 'answers.csv', fields, data)
  }
}
