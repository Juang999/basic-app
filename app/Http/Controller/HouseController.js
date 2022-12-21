const { House } = require('../../../models')

const houseController = {
    index: (req, res) => {
        House.findAll()
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
    store: (req, res) => {
        House.create({
            location: req.body.location,
            name: req.body.name,
            price: req.body.price
        })
        .then(result => {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'success to create data',
                    result: result
                })
        })
        .catch(err => {
            res.status(400)
                .json({
                    status: 'failed',
                    message: 'failed to create data',
                    error: err.message
                })
        })
    }
}

module.exports = houseController