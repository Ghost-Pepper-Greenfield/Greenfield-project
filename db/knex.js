const knex = require('knex');
const config = require('../knexfile');

module.exports = knex(process.env.PORT ? config.production : config.development);
