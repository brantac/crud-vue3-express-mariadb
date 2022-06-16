const {createUser} = require('../models/user')

async function signup (req, res) {
    const response = await createUser(req.body)
    
    res.json(response)
}
async function login (req, res) {
    const {email, password} = req.body

    console.log(email, password)
    res.send('user logged in')
}

module.exports = {
    signup,
    login
}