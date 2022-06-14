const express = require('express');
const router = express.Router();
const user = require('../controllers/user');

// Get users
// router.get('/users', user.getAllUsers)
router.get('/users', user.getAllUsersAddress)

module.exports = router;