async function signup (req, res) {
    const {email, password} = req.body

    console.log(email, password)
    res.send('user signed up')
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