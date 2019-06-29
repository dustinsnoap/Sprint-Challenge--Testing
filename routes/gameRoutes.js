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

    }
    catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})

module.exports = router