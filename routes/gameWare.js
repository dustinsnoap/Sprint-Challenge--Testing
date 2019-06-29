const uuid = require('uuid')
const model = require('./gameModel')

//checks if body has specific keys
check_required = (reqbody, ...keys) =>
  keys.reduce((prevkey, key) => (key in reqbody) && (prevkey in reqbody))

check_duplicates = async (req, res, next) => {
    const {title} = req.body
    const game = await model.get_by_title(title)
    game
    ?   res.status(405).json({message: `Game ${title} already exists.`})
    :   next()
}

check_fields = (req, res, next) => {
    // title: 'Pacman', // required, unique (status code 405 if not unique)
    // genre: 'Arcade', // required
    // releaseYear: 1980 // not required
    const required = ['title', 'genre']
    if(check_required(req.body, ...required)) {
        req.body = {
            id: uuid.v4(),
            title: req.body.title,
            genre: req.body.genre,
            releaseYear: req.body.releaseYear,
        }
        next()
    }
    else {
        res.status(422).json({message: 'Both title and genre are required.'})
    }
}

module.exports = {
    check_fields,
    check_duplicates,
}