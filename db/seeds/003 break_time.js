/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('break_time_table').del()
  await knex('break_time_table').insert([
    {id: 1, user_id: 1, time_start: '2017-04-20 12:29:45.964056', time_end: '2017-04-20 12:29:45.964056'},
    {id: 2, user_id: 2, time_start: '2017-04-20 12:29:45.964056', time_end: '2017-04-20 12:29:45.964056'},
    {id: 3, user_id: 5, time_start: '2017-04-20 12:29:45.964056', time_end: '2017-04-20 12:29:45.964056'},
    {id: 4, user_id: 3, time_start: '2017-04-20 12:29:45.964056', time_end: '2017-04-20 12:29:45.964056'},
    {id: 5, user_id: 6, time_start: '2017-04-20 12:29:45.964056', time_end: '2017-04-20 12:29:45.964056'},
    {id: 6, user_id: 1, time_start: '2017-04-20 12:29:45.964056', time_end: '2017-04-20 12:29:45.964056'},
    {id: 7, user_id: 2, time_start: '2017-04-20 12:29:45.964056', time_end: '2017-04-20 12:29:45.964056'},
    {id: 8, user_id: 3, time_start: '2017-04-20 12:29:45.964056', time_end: '2017-04-20 12:29:45.964056'},
    {id: 9, user_id: 4, time_start: '2017-04-20 12:29:45.964056', time_end: '2017-04-20 12:29:45.964056'},
    {id: 10, user_id: 4, time_start: '2017-04-20 12:29:45.964056', time_end: '2017-04-20 12:29:45.964056'},
    {id: 11, user_id: 5, time_start: '2017-04-20 12:29:45.964056', time_end: '2017-04-20 12:29:45.964056'},
    {id: 12, user_id: 6, time_start: '2017-04-20 12:29:45.964056', time_end: '2017-04-20 12:29:45.964056'},
    {id: 13, user_id: 1, time_start: '2017-04-20 12:29:45.964056', time_end: '2017-04-20 12:29:45.964056'},
    {id: 14, user_id: 2, time_start: '2017-04-20 12:29:45.964056', time_end: '2017-04-20 12:29:45.964056'},
    {id: 15, user_id: 2, time_start: '2017-04-20 12:29:45.964056', time_end: '2017-04-20 12:29:45.964056'}
  ]);
};
