const User = require('../models/user.model')

module.exports = async (req = request, res = response, next) => {

    if(req.body.username.includes('@')) {
        req.body.email = req.body.username
        req.body.username = null
    }

    const {username, email} = req.body

    if(username){
        const userByUsername = await User.getByUsername(username)
        if(userByUsername) return next()
    }

    if(email){
        const userByEmail = await User.getByEmail(username)
        if(userByEmail) return next()
    }

    return res.status(400).json({error: 'Incorrect name, email or password'})
}