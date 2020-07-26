var assert = require('assert')
const ParseMockDB = require('parse-mockdb')
const Parse = require('parse/node')

var Starships = Parse.Object.extend('Starships')

function createStarships (name, length, pilot, starshipClass) {
  var starship = new Starships()
  starship.set('name', name)
  starship.set('length', length)
  if (pilot) {
    starship.set('pilot', pilot)
  }
  if (starshipClass) {
    starship.set('starshipClass', starshipClass)
  }
  return starship.save()
}

describe('Parse MockDB Test', function () {
  beforeEach(() => {
    jest.setTimeout(15000)
    ParseMockDB.mockDB(Parse)
  })

  afterEach(() => {
    ParseMockDB.cleanUp()
    ParseMockDB.unMockDB()
  })

  it('should save the biggest startship of Star Wars', function (done) {
    createStarships('Death Star', '120000').then((item) => {
      expect(item.get('name')).toEqual('Death Star')
      done()
    })
  })

  it('should search and consume the proper ID from the ship which was saved to the db', function (done) {
    createStarships('X-wing', '12', 'Luke Skywalker').then(function (item) {
      var query = new Parse.Query(Starships)
      query.get(item.id).then(function (queryResult) {
        assert(queryResult.id === item.id)
        done()
      })
    })
  })

  it('should find 2 objects when there are 2 matches', function (done) {
    Promise.all([createStarships('X-wing', '12', 'Luke Skywalker', 'Starfighter'), createStarships('A-wing', '9.6', 'Arvel Crynyd', 'Starfighter')]).then(function (item1, item2) {
      var query = new Parse.Query(Starships)
      query.equalTo('starshipClass', 'Starfighter')
      query.find().then(function (results) {
        assert(results.length === 2)
        done()
      })
    })
  })
})
