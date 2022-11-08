/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
	return await knex.schema.alterTable("sessions_table", (table) => {
		table.string("name");
	});
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
	await knex.schema.table("sessions_table", (table) => {
		table.dropColumn("name");
	});
};
