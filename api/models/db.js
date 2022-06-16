const mysql = require('mysql2/promise');

require('dotenv').config();

async function query(query, values = '') {
    try {
        const connection = await mysql.createConnection({
            host: process.env.MARIADB_HOSTNAME,
            // host: 'localhost',  // use this when you run the container individually, without docker-compose
            user: process.env.MARIADB_USER,
            password: process.env.MARIADB_PASSWORD,
            database: process.env.MARIADB_DATABASE,
        });
        const [rows, fields] = await connection.execute(query, values);
        return rows;
    } catch (error) {
        if('errno' in error && error.errno === 1062) {
            if (error.sqlMessage.includes('email')) {
                return {error: {email: 'Email já existe'}};
            }
        };
        return {error: error.message};
    }
}

module.exports = query;