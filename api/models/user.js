const db = require('./db');
const { validateUserInput } = require('../validation/userValidator');

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

async function createUser(body) {
    // Validate user input
    const errors = validateUserInput(body);
    if (Object.keys(errors).length > 0) {
        return { errors };
    }

    return {msg: 'User created'};
}
module.exports = {
    getAllUsers,
    getAllUsersAddress,
    createUser
};