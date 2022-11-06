const knex = require('knex');
require('dotenv').config();
const knexConfig = require('../knexfile')


module.exports = knex(process.env.PORT ? config.production : config.development);
