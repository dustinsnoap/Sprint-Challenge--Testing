const uuid = require('uuid')

//checks if body has specific keys
check_fields = (reqbody, ...keys) =>
  keys.reduce((prevkey, key) => (key in reqbody) && (prevkey in reqbody))

async function  check_fields(req, res, next) {
    // title: 'Pacman', // required, unique (status code 405 if not unique)
    // genre: 'Arcade', // required
    // releaseYear: 1980 // not required
    const required = ['title', 'genre']
    if(check_fields(req.body, ...required))
        req.body = {
            id: uuid.v4,
            title: req.body.title,
            genre: req.body.genre,
            releaseYear: req.body.releaseYear,
        }
    else {
        res.status(422).json({message: 'Both title and genre are required.'})
    }
}