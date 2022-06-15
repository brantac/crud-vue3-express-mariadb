const express = require('express');
const router = express.Router();
const user = require('../controllers/user');

// Get users
router.get('/users', user.getAllUsers)

// Get users with address
// router.get('/users-address', user.getAllUsersAddress)

// Update user
// router.put('/users/:id', user.updateUser)

// Create user
// router.post('/user', user.createUser)

// Delete user
// router.delete('/user/:id', user.deleteUser)

module.exports = router;