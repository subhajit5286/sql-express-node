const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'node-first',
    password: 'walkcook76'
});

module.exports = pool.promise();