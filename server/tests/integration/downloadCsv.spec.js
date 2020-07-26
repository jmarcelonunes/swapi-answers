const app = require('../../src/app')
const request = require('supertest')

describe('Csv download test', () => {
  beforeEach(() => {
    jest.setTimeout(15000)
  })

  it('should return 200 ok', (done) => {
    request(app)
      .get('/downloads/csv')
      .expect('Content-Type', 'text/csv; charset=utf-8')
      .expect(200, done)
  })
})
