require('dotenv').config();

const knex = require('knex')({
    client: 'mysql2',
    connection: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
    },
    pool: { min: 0, max: 10 },
    log: {
        warn(msg) { console.warn(msg)},
        error(msg) { console.error(msg)},
        deprecate(msg) { console.deprecate(msg)},
        debug(msg) { console.debug(msg)}
    }
});

module.exports = knex;