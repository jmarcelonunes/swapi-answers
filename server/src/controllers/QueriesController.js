const Parse = require('parse/node')

module.exports = {
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
    query.limit(3)
    const results = await query.find()
    var answer = []
    for (let i = 0; i < results.length; i++) {
      var object = results[i]
      answer.push(object.get('name'))
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
    const answer = {
      M: resultsMale,
      F: resultsFemale
    }
    JSON.stringify(answer)
    return answer
  },

  async avarageHeight () {
    var query = new Parse.Query('Character')
    const results = await query.find()
    var sum = 0
    for (let i = 0; i < results.length; i++) {
      var object = results[i]
      if (object.get('height')) {
        var height = object.get('height')
        sum += height // 14143
      }
    }
    var avarageHeight = sum / (results.length)
    const answer = avarageHeight
    return answer.toString()
  },

  async language () {
    var innerQuery = new Parse.Query('Specie')
    innerQuery.equalTo('language', 'Gungan basic')
    var query = new Parse.Query('Character')
    query.matchesQuery('species', innerQuery)
    const results = await query.find()
    var answer = []
    for (let i = 0; i < results.length; i++) {
      var object = results[i]
      answer.push(object.get('name'))
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
