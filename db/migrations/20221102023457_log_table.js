/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
    return await knex.schema.createTable('log_table', (table) => {
        table.increments('id').primary();
        table.integer('user_id')
        .references('user_table.id')
        .notNullable();
        table.integer('study_time_id')
        .references('study_time_table.id')
        .notNullable();
        table.integer('break_time_id')
        .references('break_time_table.id')
        .notNullable();
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('log_table');
};
