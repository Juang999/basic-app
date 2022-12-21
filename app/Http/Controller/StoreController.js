const { Store } = require('../../../models')

const storeController = {
    index: (req, res) => {
        Store.findAll()
            .then(result => {
                res.status(200)
                    .json({
                        status: 'success',
                        message: 'success to get all data',
                        data: result
                    })
            })
            .catch(err => {
                res.status(400)
                    .json({
                        status: 'failed',
                        message: 'failed to get all data',
                        error: err.message
                    })
            })
    },
    store: (req, res) => {
        Store.create({
            name: req.body.name,
            address: req.body.address,
            email: req.body.email,
            phone: req.body.phone
        }).then(result => {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'success to create data',
                    data: result
                })
        }).catch(err => {
            res.status(400)
                .json({
                    status: 'failed',
                    message: 'failed to create data',
                    error: err.message
                })
        })
    },
    show: (req, res) => {
        Store.findAll({
            where: {
                id: req.params.id
            }
        }).then(result => {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'success to get detail data',
                    data: result
                })
        }).catch(err => {
            res.status(400)
                .json({
                    status: 'failed',
                    message: 'failed to get detail data',
                    error: err.message
                })
        })
    },
    update: (req, res) => {
        Store.findAll({
            where: {
                id: req.params.id
            }
        }).then(result => {
            Store.update({
                name: (req.body.name) ? req.body.name : result.name,
                address: (req.body.address) ? req.body.address : result.address,
                email: (req.body.email) ? req.body.email : result.email,
                phone: (req.body.phone) ? req.body.phone : result.phone
            }, {
                where: {
                    id: req.params.id
                }
            }).then(result => {
                res.status(200)
                    .json({
                        status: 'success',
                        message: 'success to update data',
                        data: result
                    })
            }).catch(err => {
                res.status(400)
                    .json({
                        status: 'failed',
                        message: 'failed to update data',
                        error: err.message
                    })
            })
        }).catch(err => {
            res.status(400)
                .json({
                    status: 'failed',
                    message: 'failed to get detail data',
                    error: err.message
                })
        })
    },
    delete: (req, res) => {
        Store.destroy({
            where: {
                id: req.params.id
            }
        }).then(result => {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'success to delete data',
                    data: result
                })
        }).catch(err => {
            res.status(400)
                .json({
                    status: 'failed',
                    message: 'failed to delete data',
                    error: err.message
                })
        })
    }
}

module.exports = storeController