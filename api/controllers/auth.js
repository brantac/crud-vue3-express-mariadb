async function signup (req, res) {
    res.send('user signed up')
}
async function login (req, res) {
    res.send('user logged in')
}

module.exports = {
    signup,
    login
}