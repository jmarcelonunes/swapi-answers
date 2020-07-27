const Parse = require('parse/node')

module.exports = {
  // Module responsible for querying the database to obtain all the answers
  async film () {
    var query = new Parse.Query('Film')
    query.ascending('releaseDate')
    const results = await query.first()
    const answer = results.get('title')
    return answer.toString()
  },

  async species () {
    var query = new Parse.Query('Specie')
    query.notContainedIn('averageLifespan', [undefined, null])
    query.ascending('averageLifespan')
    const results = await query.find()
    var answer = []
    const lessAverageLifespan = results[0].get('averageLifespan')
    for (let i = 0; i < results.length; i++) {
      if (lessAverageLifespan === results[i].get('averageLifespan')) {
        answer.push(results[i].get('name'))
      }
    }
    return answer.toString()
  },

  async gender () {
    var query1 = new Parse.Query('Character')
    query1.equalTo('gender', 'male')
    var query2 = new Parse.Query('Character')
    query2.equalTo('gender', 'female')
    const resultsMale = await query1.count()
    const resultsFemale = await query2.count()
    let fullResult = {
      M: resultsMale,
      F: resultsFemale
    }
    fullResult = JSON.stringify(fullResult)
    const answer = fullResult.replace(/[{}]|(['"])/g, '')
    return answer
  },

  async avarageHeight () {
    var query = new Parse.Query('Character')
    const results = await query.find()
    var sum = 0
    for (let i = 0; i < results.length; i++) {
      var object = results[i]
      if (object.get('height')) {
        sum += object.get('height') // 14143
      }
    }
    var answer = (sum / (results.length)) / 100
    return answer.toFixed(2)
  },

  async language () {
    var innerQuery = new Parse.Query('Specie')
    innerQuery.equalTo('language', 'Gungan basic')
    var query = new Parse.Query('Character')
    query.matchesQuery('species', innerQuery)
    const results = await query.find()
    var answer = []
    for (let i = 0; i < results.length; i++) {
      answer.push(results[i].get('name'))
    }
    return answer.toString()
  },

  async population () {
    var innerQuery = new Parse.Query('Planet')
    innerQuery.descending('population')
    const planet = await innerQuery.first()
    var query = new Parse.Query('Character')
    query.equalTo('homeworld', planet)
    const results = await query.find()
    var answer = results.length
    return answer.toString()
  }
}
