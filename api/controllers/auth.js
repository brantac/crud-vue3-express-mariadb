const {createUser} = require('../models/user')

async function signup (req, res) {
    const user = await createUser(req.body)

    res.json(user)
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