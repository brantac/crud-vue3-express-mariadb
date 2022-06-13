const connection = require('./db');

export function getAllUsers() {
    return connection.promise().query('SELECT * FROM users');
}