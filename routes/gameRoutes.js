const express = require('express')
const router = express.Router()

const db = require('./gameModel')

//ROUTE: /api/games

//C
// vvv expected object for post vvv
// {
//     title: 'Pacman', // required, unique (status code 405 if not unique)
//     genre: 'Arcade', // required
//     releaseYear: 1980 // not required
// }
// should return status code 422 if given wrong object (add in middleware)
router.post('/', async (req, res) => {
    try {
        const game = await db.post(req.body)
        game
        ?   res.status(201).json(game)
        :   res.status(404).json({message: `Game couldn't be added.`})
    }
    catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})

//R
// get all games
// should always return an array, even if empty
// should return status code 200
router.get('/', async (req, res) => {
    try {
        const games = await db.get_all()
        games
        ?   res.status(200).json(games)
        :   res.status(404).json({message: `Couldn't find games.`})
    }
    catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})

// get game by id
// should return status code 404 if game id isn't found
router.get('/:id', async (req, res) => {
    try {
        const game = await db.get_by_id(req.params.id)
        game
        ?   res.status(200).json(game)
        :   res.status(404).json({message: `Game with id: ${req.params.id} not found.`})
    }
    catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})

// deletes a game with given id
// should return status code 404 if game id isn't found
router.delete('/:id', async (req, res) => {
    try {
        await db.remove(req.params.id)
        ?   res.status(200).json({message: `Game with id: ${req.params.id} has been deleted.`})
        :   res.status(404).json({message: `Couldn't find game with id: ${req.params.id}.`})
    }
    catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})

module.exports = router