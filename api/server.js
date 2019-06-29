const express = require('express')
const server = express()

const routes = require('../routes/gameRoutes')

server.use(express.json())

//routes
server.use('/api/games', routes)

module.exports = server
