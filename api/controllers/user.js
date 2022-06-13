const userModel = require('../models/user');

export function getAllUsers() {
    return userModel.getAllUsers();
}