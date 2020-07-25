const convertToCsv = require('../../src/utils/convertToCsv')
const parseConnection = require('../../src/parseConnection')

describe('Methods to manipulate object and convert to CSV', () => {
  parseConnection.parseInitialize()
  it('should return an object containing all the answers to the questions', async () => {
    await expect(convertToCsv.objectSetup()).resolves.toEqual({ five: 'Roos Tarpals,Rugor Nass,Jar Jar Binks', four: '172.47560975609755', one: 'A New Hope', six: '3', three: 'M:60,F:17', two: 'Nautolan,Kel Dor,Clawdite' })
  })
})
