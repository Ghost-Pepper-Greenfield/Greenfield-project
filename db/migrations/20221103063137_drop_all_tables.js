/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.dropTable('log_table');
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
    await knex.schema.createTable('log_table', (table) => {
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
