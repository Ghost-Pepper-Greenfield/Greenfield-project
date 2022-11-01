require('dotenv').config();

module.exports = {
    development: {
        client: 'pg',
        connection: {
            USERNAME: process.env.USERNAME,
            PASSWORD: process.env.PASSWORD,
            DATABASE: process.env.DATABASE,
        },
        searchpath: 'public',
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: 'knex_migrations',
            directory: __dirname + '/db/migrations'
        },
        seeds: {
            directory: __dirname + '/db/seeds'
        }
    },
production: {
    client: 'pg',
    connection:  process.env.DATABASE,
    searchpath: 'public',
    pool: {
        min: 2,
        max: 10
    },
    migrations: {
        tableName: 'knex_migrations',
        directory: __dirname + '/db/migrations'
    },
    seeds: {
        directory: __dirname + '/db/seeds'
    }
    }
}