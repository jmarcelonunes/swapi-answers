const Queries = require('../controllers/QueriesController')

module.exports = {
  // Sets an object with all the answers so it can be converted to csv
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
