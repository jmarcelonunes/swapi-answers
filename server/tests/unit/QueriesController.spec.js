const QueriesController = require('../../src/controllers/QueriesController')
const parseConnection = require('../../src/database/parseConnection')

describe('Queries the SWAPI data', () => {
  parseConnection.parseInitialize()
  beforeEach(() => {
    jest.setTimeout(15000)
  })

  it('should return A new Hope which was the first Star Wars Movie', () => {
    return expect(QueriesController.film()).resolves.toBe('A New Hope')
  })

  it('should return 3 species which are Nautolan, Kel Dor and Clawdite', () => {
    return expect(QueriesController.species()).resolves.toBe('Nautolan,Kel Dor,Clawdite')
  })

  it('should return 60 males and 17 females', () => {
    return expect(QueriesController.gender()).resolves.toBe('M:60,F:17')
  })

  it('should return the Avarage Height of the characters which is 14143/82 = 172.47560975609755', () => {
    return expect(QueriesController.avarageHeight()).resolves.toBe('1.72')
  })

  it('should return the Characters that speaks Gungan basic', () => {
    return expect(QueriesController.language()).resolves.toBe('Roos Tarpals,Rugor Nass,Jar Jar Binks')
  })

  it('should return the number of characters that lives in the most populated planet (Couruscant). The correct number is 3', () => {
    return expect(QueriesController.population()).resolves.toBe('3')
  })
})
