const server = require('../api/server')
const request = require('supertest')
const db = require('../data/dbConfig')
const model = require('./gameModel')

describe('testing routes', () => {
    describe('add new game', () => {
        afterEach(async () => await db('testing').truncate())
        it('should return JSON', () => {
            request(server)
                .post('/api/games')
                .send({title: 'Boogerman', genre: 'Adventure'})
                .expect('Content-Type', /json/)
        })
        it('should return status code 200', () => {
            request(server)
                .post('/api/games')
                .send({title: 'Boogerman', genre: 'Adventure'})
                .expect(200)
        })
        it('should return status code 422 with missing fields', () => {
            request(server)
                .post('/api/games')
                .send({title: 'Boogerman'})
                .expect(422)
        })
        it('should return status code 405 with duplicate entries', async () => {
            await request(server)
                .post('/api/games')
                .send({title: 'Ninja Baseball Bat Man', genre: 'Sports'})
            let res = await request(server)
                .post('/api/games')
                .send({title: 'Ninja Baseball Bat Man', genre: 'Sports'})
            expect(res.status).toBe(405)
        })
    })
    describe('get all games', () => {
        afterEach(async () => await db('testing').truncate())

        it('should return JSON', () => {
            request(server)
                .get('/api/games')
                .expect('Content-Type', /json/)
        })
        it('should return status code 200', () => {
            request(server)
                .get('/api/games')
                .expect(200)
        })
        it('should return empty array when there are no games', async () => {
            const res = await request(server).get('/api/games')
            expect(res.body).toEqual([])
        })
        it('should return games where there are games', async () => {
            await db('testing').insert({id: 1, title: 'Ninja Hamster', genre: 'Fighting'})
            await db('testing').insert({id: 2, title: 'Frogger: Helmet Chaos', genre: 'Fighting'})
            const res = await request(server).get('/api/games')
            expect(res.body).toHaveLength(2)
        })
    })
})