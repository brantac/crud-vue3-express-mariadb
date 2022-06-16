const {createUser} = require('../models/user')

async function signup (req, res) {
    const response = await createUser(req.body)
    if (response.error) res.status(200).json(response)
    
    res.status(201).json(response)
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