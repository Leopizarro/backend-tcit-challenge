const { Client } = require('pg');

const db = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'tcit-database',
    password: 'test',
    port: 5432,
})

module.exports = db;