const express = require('express');
const router = express.Router();
const user = require('../controllers/user');

// Get users
router.get('/users', (req, res) => {
    const users = user.getAllUsers();
})