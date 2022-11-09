/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
	return await knex.schema.dropTable("sessions_table");
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
	return await knex.schema.createTable("sessions_table", (table) => {
		table.increments("id").primary(),
			table.string("firebaseId", 255).notNullable(),
			table.date("date").notNullable(),
			table.string("duration").notNullable(),
			table.boolean("study_rest");
	});
};
