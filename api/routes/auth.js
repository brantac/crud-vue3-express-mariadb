const {Router} = require('express')
const router = Router()
const auth = require('../controllers/auth')

// Create user
router.post('/signup', auth.signup)

// Login user
router.post('/login', auth.login)

module.exports = router