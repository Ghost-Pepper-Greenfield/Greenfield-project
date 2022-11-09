/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
	// Deletes ALL existing entries
	await knex("sessions_table").del();
	await knex("sessions_table").insert([
		{
			id: 1,
			firebaseId: "bobsmith123",
			name: "Bob Smith",
			date: "2022-11-01",
			duration: "220",
			points: 100,
		},
		{
			id: 2,
			firebaseId: "abcz57",
			name: "abc z57",
			date: "2022-11-01",
			duration: "12330",
			points: 10,
		},
		{
			id: 3,
			firebaseId: "xyz_person",
			name: "xyz",
			date: "2022-11-02",
			duration: "13400",
			points: 120,
		},
		{
			id: 4,
			firebaseId: "bobsmith123",
			name: "Bob Smith",
			date: "2022-10-04",
			duration: "12200",
			points: 100,
		},
		{
			id: 5,
			firebaseId: "bobsmith123",
			name: "Bob Smith",
			date: "2022-11-02",
			duration: "2000",
			points: 200,
		},
		{
			id: 6,
			firebaseId: "abcz57",
			name: "abc z57",
			date: "2022-11-04",
			duration: "4000",
			points: 1000,
		},
		{
			id: 7,
			firebaseId: "abcz57",
			name: "abc z57",
			date: "2022-11-01",
			duration: "4000",
			points: 50,
		},
		{
			id: 8,
			firebaseId: "xyz_person",
			name: "xyz person",
			date: "2022-10-28",
			duration: "2400",
			points: 60,
		},
		{
			id: 9,
			firebaseId: "bobsmith123",
			name: "Bob Smith",
			date: "2022-10-28",
			duration: "3000",
			points: 300,
		},
	]);
};
