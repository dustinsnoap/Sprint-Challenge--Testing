const db = require('../data/dbConfig')

module.exports = {
    get_all,
    get_by_id,
    get_by_title,
    add,
    remove,
}

async function add(game) {
    await db('testing').insert(game)
    return get_by_title(game.title)
}

async function get_all() {
    return await db('testing')
}

async function get_by_title(title) {
    return await db('testing').where({title}).first()
}

async function get_by_id(id) {
    return await db('testing').where({id}).first()
}

async function remove(id) {
    return await db('testing').where({id}).delete()
}