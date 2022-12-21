const { User } = require('../../../models')
const argon2 = require('argon2')

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
    }
}

module.exports = userController