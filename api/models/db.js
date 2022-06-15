const mysql = require('mysql2/promise');

require('dotenv').config();

async function query(query, values = '') {
    try {
        const connection = await mysql.createConnection({
            host: process.env.MARIADB_HOSTNAME,
            user: process.env.MARIADB_USER,
            password: process.env.MARIADB_PASSWORD,
            database: process.env.MARIADB_DATABASE,
        });
        const [rows, fields] = await connection.execute(query, values);
        return rows;        
    } catch (error) {
        console.error("Error while trying to connect to the server: ");
        return [];
    }
}

module.exports = query;