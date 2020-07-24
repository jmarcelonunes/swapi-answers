const convertToCsv = require('../../src/utils/convertToCsv')
const Parse = require('parse/node')

describe('Methods to manipulate object and convert to CSV', () => {
  // Parse Initialization
  Parse.initialize('Jl21MbJjOzHoq3eNjK0dY1cuRyQnOeu1GNIGQpY3', 'Aqy19HFsorwxIhCC3E9IYBQh8WBnkdoMGOdEaYPe')
  Parse.serverURL = 'https://parseapi.back4app.com/'
  it('should return an object containing all the answers to the questions', async () => {
    await expect(convertToCsv.objectSetup()).resolves.toEqual({ five: 'Roos Tarpals,Rugor Nass,Jar Jar Binks', four: '172.47560975609755', one: 'A New Hope', six: '3', three: 'M:60,F:17', two: 'Nautolan,Kel Dor,Clawdite' })
  })
})
