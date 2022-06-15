const db = require('./db');
const { isEmail } = require('validator');

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
    const { email,password } = body;
    if (!isEmail(email)) return {msg: 'Invalid email'};

    if (password.length < 6) return {msg: 'Password must be at least 6 characters'};
    
    return {msg: body}
}
module.exports = {
    getAllUsers,
    getAllUsersAddress,
    createUser
};