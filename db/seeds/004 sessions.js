/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('sessions_table').del()
  await knex('sessions_table').insert([
    {id: 1, firebaseId: 'bobsmith123', date:'2022-11-01', duration:'220', study_rest:'true' },
    {id: 2, firebaseId: 'abcz57', date:'2022-11-01', duration:'12330', study_rest:'false' },
    {id: 3, firebaseId: 'xyz_person', date:'2022-11-02', duration:'13400', study_rest:'true' },
    {id: 4, firebaseId: 'bobsmith123', date:'2022-10-04', duration:'12200', study_rest:'true' },
    {id: 5, firebaseId: 'bobsmith123', date:'2022-11-02', duration:'2000', study_rest:'false' },
    {id: 6, firebaseId: 'abcz57', date:'2022-11-04', duration:'4000', study_rest:'true' },
    {id: 7, firebaseId: 'abcz57', date:'2022-11-01', duration:'4000', study_rest:'false' },
    {id: 8, firebaseId: 'xyz_person', date:'2022-10-28', duration:'2400', study_rest:'true' },
    {id: 9, firebaseId: 'bobsmith123', date:'2022-10-28', duration:'3000', study_rest:'true' },
  ]);
};
