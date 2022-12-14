require('dotenv').config()

const { User } = require('../../../models')
const argon2 = require('argon2')
const jwt = require('jsonwebtoken')
const auth = require('../../../tools/auth')

const userController = {
    index: (req, res) => {
        User.findAll()
            .then(result => {
                res.status(200)
                    .json({
                        status: 'success',
                        message: 'success to get data',
                        result: result
                    })
            })
            .catch(err => {
                res.status(400)
                    .json({
                        status: 'failed',
                        message: 'failed to get data',
                        error: err.message
                    })
            })
    },
    register: async (req, res) => {

        const password = await argon2.hash(req.body.password)
        
        User.create({
            name: req.body.name,
            username: req.body.username,
            email: req.body.email,
            password: password,
            phone: req.body.phone
        })
        .then(result => {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'success to register',
                    result: result
                })
        })
        .catch(err => {
            res.status(400)
                .json({
                    status: 'failed',
                    message: 'failed to register',
                    error: err.message
                })
        })
    },
    login: async (req, res) => {
        User.findOne({
            where: {
                email: req.body.email
            },
            attributes: ['id', 'email', 'password']
        })
        .then(async result => {
            const verify = await argon2.verify(result.password, req.body.password)

        if (verify == false) {
            res.status(400)
                .json({
                    status: 'failed',
                    message: 'your email or password is incorrect'
                })

            return;
        }

        const user = {id: result.id, email: result.email, password: result.password}

        const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: "7 days"})

            res.status(200)
                .json({
                    token: accessToken
                })
        })
        .catch(err => {
            res.status(403)
                .json({
                    status: 'failed',
                    message: 'your email or password is incorrect'
                })
        })
    },
    profile: async (req, res) => {
        try {
            let userAuth = await auth(req)

            let user = await User.findOne({
                where: {
                    id: userAuth.id
                },
                attributes: ['name', 'username', 'email', 'phone']
            })
            
            res.status(200)
                .json({
                    status: "success",
                    message: "success to get profile",
                    data: user
                })
        } catch (error) {
            res.status(400)
                .json({
                    status: "failed",
                    message: "failed to get profile",
                    error: error.message
                })
        }
    }
}

module.exports = userController