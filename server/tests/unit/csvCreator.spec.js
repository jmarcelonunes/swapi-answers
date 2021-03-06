const convertToCsv = require('../../src/utils/convertToCsv')
const parseConnection = require('../../src/database/parseConnection')

describe('Methods to manipulate object and convert to CSV', () => {
  beforeEach(() => {
    jest.setTimeout(15000)
  })
  parseConnection.parseInitialize()
  it('should return an object containing all the answers to the questions', () => {
    return expect(convertToCsv.objectSetup()).resolves.toEqual({ five: 'Roos Tarpals,Rugor Nass,Jar Jar Binks', four: '1.72', one: 'A New Hope', six: '3', three: 'M:60,F:17', two: 'Nautolan,Kel Dor,Clawdite' })
  })
})
