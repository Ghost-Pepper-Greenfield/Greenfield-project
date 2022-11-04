/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.dropTable('break_time_table');
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
    await knex.schema.createTable('break_time_table', (table) => {
        table.increments('id').primary();
        table.integer('user_id')
        .references('user_table.id')
        .notNullable();
        table.timestamp('time_start');
        table.timestamp('time_end');
    })
};
