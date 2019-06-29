const db = require('../data/dbConfig')
const model = require('./gameModel')

describe('testing model', () => {
    describe('add(game)', () => {
        afterEach(async () => await db('testing').truncate())
        // itle: 'Pacman', // required, unique (status code 405 if not unique)
        // enre: 'Arcade', // required
        // eleaseYear: 1980 // not required
        it('should insert games into the db', async () => {
            await model.add({id: 1, title: 'Pepsiman', genre: 'Action', releaseYear: 1999})
            await model.add({id: 2, title: 'Jesus: The Terrifying Bio-Monster', genre: 'Platformer', releaseYear: 1987})

            const games = await model.get_all()
            expect(games).toHaveLength(2)
        })
        it('should return the correct game on insert', async () => {
            const game = await model.add({id: 1, title: 'Tongue of the Fatman', genre: 'Action', releaseYear: 1989})
            expect(game.title).toBe('Tongue of the Fatman')
        })
    })
    describe('get_all()', () => {
        afterEach(async () => await db('testing').truncate())

        it('should return an empty array', async() => {
            const res = await model.get_all()
            expect(res).toEqual([])
        })
        it('should return multiple games', async() => {
            await model.add({id: 1, title: 'Spankys Quest', genre: 'Adventure', releaseYear: 1991})
            await model.add({id: 2, title: 'If It Moves, Shoot It!', genre: 'Shooter', releaseYear: 1989})
            await model.add({id: 3, title: 'Leisure Suit Larry 3: Passionate Patti in Pursuit of the Pulsating Pectorals', genre: 'Adventure', releaseYear: 1989})

            const games = await model.get_all()
            expect(games).toHaveLength(3)
        })
    })
    describe('remove()', () => {
        afterEach(async () => await db('testing').truncate())

        it('should remove a game if given a valid id', async () => {
            await model.add({id: 1, title: 'Barbie Horse Adventure', genre: 'Adventure', releaseYear: 2003})
            await model.add({id: 2, title: 'Attack of the Mutant Camels', genre: 'Shooter', releaseYear: 1983})
            await model.add({id: 3, title: 'Extreme Sports with the Berenstain Bears', genre: 'Adventure', releaseYear: 2000})
            await model.remove(2)
            
            const games = await model.get_all()
            expect(games).toHaveLength(2)
        })
    })
})