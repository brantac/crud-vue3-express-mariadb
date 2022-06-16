const bcrypt = require('bcrypt');
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

    // 1. Encrypt password
    let { password } = body;
    const salt = await bcrypt.genSalt(10);
    password = await bcrypt.hash(password, salt);
    body.password = password;
    // 2. Create user
    const query = 'INSERT INTO `user` (name, email, password) VALUES (?, ?, ?)';
    const rows = await db(query, [body.name, body.email, body.password]);

    if ('affectedRows' in rows && rows.affectedRows === 1) {
        return { ...body, user_id: rows.insertId };
    }

    return rows;
}
module.exports = {
    getAllUsers,
    getAllUsersAddress,
    createUser
};