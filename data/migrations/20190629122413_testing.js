// {
    // title: 'Pacman', // required
    // genre: 'Arcade', // required
    // releaseYear: 1980 // not required
// }
exports.up = (knex) =>
    knex.schema.createTable('testing', tbl => {
        tbl.string('id')
            .notNullable()
            .unique()
            .primary()
        tbl.string('title')
            .notNullable()
            .unique()
        tbl.string('genre')
            .notNullable()
        tbl.int('releaseYear')
        tbl.timestamps(true, true)
    })

exports.down = (knex) =>
    knex.schema.dropTableIfExists('testing')