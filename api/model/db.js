const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: process.env.MARIADB_HOSTNAME,
    user: process.env.MARIADB_USER,
    password: process.env.MARIADB_PASSWORD,
    database: process.env.MARIADB_DATABASE,
});

exports.default = connection;