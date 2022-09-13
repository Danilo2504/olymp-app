const User = require('../models/user.model')
const Verification = require('../models/verification.model')
const {genToken, getToken} = require('../helpers/jwt')
const sendEmail = require('../helpers/sendEmail')
const randtoken = require('rand-token')

const html = require('../helpers/html')

const login = async (req = request, res = response) => {
    const {namemail, password} = req.body
    let email
    let name
    if(namemail.includes('@')) email = namemail
    else name = namemail

    const user = new User({name, email, password})

    await user.login()
        .then(async result => {
            const token = await genToken({id: result.id}, '30d')
            res.status(200).json({token})
        })
        .catch(error => {
            res.status(400).json({error: "Incorrect email or password"})
        })
}

const register = async (req = request, res = response) => {
    const {name, email, password} = req.body

    const user = new User({name, email, password})

    // const token = randtoken.generate(8)

    const userFind = await user.findBy({email})

    if(!userFind) await user.save()

    // const verification = new Verification({token, userId: userSaved.id})
    // await verification.save()

    const jwtToken = await genToken({name, email, password}, '3h')

    await sendEmail({
        email,
        service: 'gmail',
        from: 'MC Datapacks',
        subject: 'Confirm account - MC Datapacks',
        html: html(process.env.URL, jwtToken)
    })

    res.status(200).json({msg: 'Please confirm account in your email'})
}

const confirm = async (req = request, res = response) => {
    const {name, email, password} = await getToken(req.query.token)

    // const verification = new Verification({token: token.token})
    // const verificationFind = await verification.find()
    // console.log(verificationFind);

    console.log(await getToken(req.query.token));

    const user = new User({email})

    if(!email) return res.status(400).json({error: 'Invalidad token'})

    await user.update({name, password, verified: true})

    // await verification.delete()

    res.send("<script>window.close();</script>")
}

module.exports = {
    login,
    register,
    confirm
}