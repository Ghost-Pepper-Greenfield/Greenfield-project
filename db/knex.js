const knex = require('knex');
const { production, development } = require('../knexfile');
require('dotenv').config();
const knexConfig = require('../knexfile')


const environment = process.env.NODE_ENV === "production" ? production : development;

module.exports = knex(knexConfig[environment]);
