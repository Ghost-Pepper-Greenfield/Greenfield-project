/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('sessions_table').del()
  await knex('sessions_table').insert([
    {id: 1, firebaseId: 'bobsmith123', date:'2022-11-01', duration:'22min', study_rest:'true' },
    {id: 2, firebaseId: 'abcz57', date:'2022-11-01', duration:'1hr22min33sec', study_rest:'false' },
    {id: 3, firebaseId: 'xyz_person', date:'2022-11-02', duration:'1hr00min33sec', study_rest:'true' },
    {id: 4, firebaseId: 'bobsmith123', date:'2022-10-04', duration:'1hr29min33sec', study_rest:'true' },
    {id: 5, firebaseId: 'bobsmith123', date:'2022-11-02', duration:'3hr22min33sec', study_rest:'false' },
    {id: 6, firebaseId: 'abcz57', date:'2022-11-04', duration:'1hr20min33sec', study_rest:'true' },
    {id: 7, firebaseId: 'abcz57', date:'2022-11-01', duration:'1hr22min33sec', study_rest:'false' },
    {id: 8, firebaseId: 'xyz_person', date:'2022-10-28', duration:'1hr22min00sec', study_rest:'true' },
    {id: 9, firebaseId: 'bobsmith123', date:'2022-10-28', duration:'25min00sec', study_rest:'true' },
  ]);
};
