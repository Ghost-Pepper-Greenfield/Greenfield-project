const knex = require('knex');
const config = require('../knexfile');
require('dotenv').config();
const knexConfig = require('../knexfile');



module.exports = knex(process.env.PORT ? config.production : config.development);
