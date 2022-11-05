/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
    return await knex.schema.table('sessions_table', (table) => {
        table.dropColumn('study_rest')
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
     await knex.schema.table('sessions_table', (table) => {
        table.integer('study_rest')
    })
};
