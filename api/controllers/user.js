const userModel = require('../models/user');

async function getAllUsers(req, res) {
    let rows = await userModel.getAllUsers();
    res.json(rows);
}

async function getUserById(req, res) {
    let id = req.params.id;
    let rows = await userModel.getUserById(id);
    res.json(rows);
}

async function getAllUsersAddress(req, res) {
    let rows = await userModel.getAllUsersAddress();
    res.json(rows);
}

module.exports = {
    getAllUsers,
    getAllUsersAddress,
    getUserById
};