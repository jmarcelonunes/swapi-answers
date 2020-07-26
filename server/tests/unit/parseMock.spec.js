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
    ParseMockDB.mockDB(Parse)
    jest.setTimeout(15000)
  })

  afterEach(() => {
    ParseMockDB.cleanUp()
    ParseMockDB.unMockDB()
  })

  it('should save the biggest startship of Star Wars', async () => {
    const ship = await createStarships('Death Star', '120000')
    expect(ship.get('name')).toBe('Death Star')
  })

  it('should save and find a ship', async () => {
    await createStarships('Death Star', '120000')
    const query = new Parse.Query(Starships)
    query.equalTo('length', '120000')
    const fetchShip = await query.first()
    expect(fetchShip.get('name')).toBe('Death Star')
  })
})
