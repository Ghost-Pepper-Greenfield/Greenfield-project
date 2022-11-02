/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('study_time_table').del()
  await knex('study_t1_table').insert([
    {id: 2, user_id: 1, time_start: ' ', time_end: ' '},
    {id: 1, user_id: 2, time_start: ' ', time_end: ' '},
    {id: 3, user_id: 1, time_start: ' ', time_end: ' '},
    {id: 4, user_id: 3, time_start: ' ', time_end: ' '},
    {id: 5, user_id: 1, time_start: ' ', time_end: ' '},
    {id: 6, user_id: 4, time_start: ' ', time_end: ' '},
    {id: 0, user_id: 1, time_start: ' ', time_end: ' '},
    {id: 0, user_id: 4, time_start: ' ', time_end: ' '},
    {id: 0, user_id: 1, time_start: ' ', time_end: ' '},
    {id: 0, user_id: 1, time_start: ' ', time_end: ' '},
    {id: 0, user_id: 6, time_start: ' ', time_end: ' '},
    {id: 0, user_id: 1, time_start: ' ', time_end: ' '},
    {id: 0, user_id: 3, time_start: ' ', time_end: ' '},
    {id: 0, user_id: 1, time_start: ' ', time_end: ' '},
    {id: 0, user_id: 2, time_start: ' ', time_end: ' '},
    {id: 0, user_id: 1, time_start: ' ', time_end: ' '},
    {id: 0, user_id: 1, time_start: ' ', time_end: ' '},
    {id: 0, user_id: 4, time_start: ' ', time_end: ' '},
    {id: 0, user_id: 1, time_start: ' ', time_end: ' '},
    {id: 0, user_id: 1, time_start: ' ', time_end: ' '},
    {id: 0, user_id: 6, time_start: ' ', time_end: ' '},
    {id: 0, user_id: 6, time_start: ' ', time_end: ' '},
    {id: 0, user_id: 1, time_start: ' ', time_end: ' '},
    {id: 0, user_id: 1, time_start: ' ', time_end: ' '},
    {id: 0, user_id: 3, time_start: ' ', time_end: ' '},
    {id: 0, user_id: 1, time_start: ' ', time_end: ' '},
    {id: 0, user_id: 5, time_start: ' ', time_end: ' '},
    {id: 0, user_id: 1, time_start: ' ', time_end: ' '},
    {id: 0, user_id: 3, time_start: ' ', time_end: ' '},
    {id: 0, user_id: 4, time_start: ' ', time_end: ' '},
    {id: 0, user_id: 1, time_start: ' ', time_end: ' '},
    {id: 0, user_id: 5, time_start: ' ', time_end: ' '},
    {id: 0, user_id: 6, time_start: ' ', time_end: ' '},
    {id: 0, user_id: 3, time_start: ' ', time_end: ' '},
    {id: 0, user_id: 4, time_start: ' ', time_end: ' '},
    {id: 0, user_id: 2, time_start: ' ', time_end: ' '}
};
