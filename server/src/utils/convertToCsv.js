const { Parser } = require('json2csv')
const Queries = require('../controllers/QueriesController')

module.exports = {
  csvCreator (res, fileName, fields, data) {
    const json2csv = new Parser({ fields, delimiter: ';' })
    const csv = json2csv.parse(data)
    res.header('Content-Type', 'text/csv')
    res.attachment(fileName)
    return res.send(csv)
  },

  async objectSetup () {
    const answerOne = await Queries.film()
    const answerTwo = await Queries.species()
    const answerThree = await Queries.gender()
    const answerFour = await Queries.avarageHeight()
    const answerFive = await Queries.language()
    const answerSix = await Queries.population()

    const completeAnswers = {
      one: answerOne,
      two: answerTwo,
      three: answerThree,
      four: answerFour,
      five: answerFive,
      six: answerSix
    }

    return completeAnswers
  }
}
