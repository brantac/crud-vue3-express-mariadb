const db = require('./db');

async function getAllUsers() {
    let query = 'SELECT * FROM `user`';
    let rows = await db(query);
    return rows;
}

async function getAllUsersAddress() {
    let query = '' +
    'SELECT u.user_id, u.name, a.city ' +
    'FROM user u LEFT JOIN address a ON u.address_id = a.address_id';
    let rows = await db(query);
    return rows;
}

async function updateUser(id, fields) {
    let query = 'UPDATE `user` SET ? WHERE user_id = ?';
    let rows = await db(query, [fields, id]);
}

module.exports = {
    getAllUsers,
    getAllUsersAddress
};