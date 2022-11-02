/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('user_table').del()
  await knex('user_table').insert([
    {id: 1, first_name: 'Chad', last_name: 'Grover', email: 'test@email.com'},
    {id: 2, first_name: 'Joey', last_name: 'Yasuhiro', email: 'test@email.com'},
    {id: 3, first_name: 'Jay', last_name: 'Montojo', email: 'test@email.com'},
    {id: 4, first_name: 'Juli', last_name: 'Boucree', email: 'test@email.com'},
    {id: 5, first_name: 'Dominic', last_name: 'Lowe', email: 'test@email.com'},
    {id: 6, first_name: 'Blake', last_name: 'Ohare', email: 'test@email.com'}
  ]);
};
