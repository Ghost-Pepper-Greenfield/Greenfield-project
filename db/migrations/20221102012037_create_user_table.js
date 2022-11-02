/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
    return await knex.schema.createTable('user_table', (table) => {
        table.increments('id');
        table.string('first_name', 255)
        .notNullable;
        table.string('last_name', 255)
        .notNullable;
        table.string('email', 255);
    })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('user_table');
};
