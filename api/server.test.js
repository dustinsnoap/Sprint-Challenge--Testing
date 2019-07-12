const server = require('./server')
require('dotenv').config()

describe('server.js', () => {
    it('should set the test env', () => {
        expect(process.env.DB_ENV).toBe('testing')
    })
})