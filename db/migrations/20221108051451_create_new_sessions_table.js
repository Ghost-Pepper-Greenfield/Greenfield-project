/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
	return await knex.schema.createTable("sessions_table", (table) => {
		table.increments("id").primary(),
			table.string("name", 255).notNullable,
			table.string("firebaseId", 255).notNullable(),
			table.date("date").notNullable(),
			table.string("duration").notNullable(),
			table.integer("points");
	});
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
	await knex.schema.dropTable("sessions_table");
};
