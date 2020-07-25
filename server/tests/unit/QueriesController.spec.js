const QueriesController = require('../../src/controllers/QueriesController')
const parseConnection = require('../../src/parseConnection')

describe('Queries the SWAPI data', () => {
  parseConnection.parseInitialize()

  it('should return A new Hope which was the first Star Wars Movie', async () => {
    await expect(QueriesController.film()).resolves.toBe('A New Hope')
  })

  it('should return 3 species which are Nautolan, Kel Dor and Clawdite', async () => {
    await expect(QueriesController.species()).resolves.toBe('Nautolan,Kel Dor,Clawdite')
  })

  it('should return 60 males and 17 females', async () => {
    await expect(QueriesController.gender()).resolves.toBe('M:60,F:17')
  })

  it('should return the Avarage Height of the characters which is 14143/82 = 172.47560975609755', async () => {
    await expect(QueriesController.avarageHeight()).resolves.toBe('172.47560975609755')
  })

  it('should return the Characters that speaks Gungan basic', async () => {
    await expect(QueriesController.language()).resolves.toBe('Roos Tarpals,Rugor Nass,Jar Jar Binks')
  })

  it('should return the number of characters that lives in the most populated planet (Couruscant). The correct number is 3', async () => {
    await expect(QueriesController.population()).resolves.toBe('3')
  })
})
