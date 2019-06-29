const db = require('../data/dbConfig')

module.exports = {
    get_all,
    get_by_id,
    add,
    remove,
}

async function add(game) {
    const [id] = await db('testing').insert(game)
    return get_by_id(id)
}

function get_all() {
    return db('testing')
}

function get_by_id(id) {
    return db('testing').where({id}).first()
}

function remove(id) {
    return db('testing').where({id}).del()
}