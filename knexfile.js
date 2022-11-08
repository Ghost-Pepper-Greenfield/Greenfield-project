require("dotenv").config();

module.exports = {
	development: {
		client: "pg",
		connection: {
			password: "buyukbalik",
			user: "kamil",
			database: "greenfield",
		},
		searchpath: "public",
		pool: {
			min: 2,
			max: 10,
		},
		migrations: {
			tableName: "knex_migrations",
			directory: __dirname + "/db/migrations",
		},
		seeds: {
			directory: __dirname + "/db/seeds",
		},
	},
	production: {
		client: "pg",
		connection: process.env.database_url,
		// searchpath: 'public',
		// pool: {
		//     min: 2,
		//     max: 10
		// },
		migrations: {
			tableName: "knex_migrations",
			directory: __dirname + "/db/migrations",
		},
		seeds: {
			directory: __dirname + "/db/seeds",
		},
	},
};
