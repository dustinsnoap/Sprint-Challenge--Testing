// {
    // title: 'Pacman', // required
    // genre: 'Arcade', // required
    // releaseYear: 1980 // not required
// }
exports.up = function(knex) {
    knex.schema.createTable('testing', tbl => {
        tbl.string('id')
            .notNullable()
            .unique()
            .primary()
        tbl.string('title')
            .notNullable()
            .unique()
        tbl.int('releaseYear')
        tbl.timestamps(true, true)
    })
}

exports.down = function(knex) {
    knex.schema.dropTableIfExists('testing')
}