const { Car } = require('../../../models')

const carsController = {
    index: (req, res) => {
        Car.findAll()
            .then(result => {
                res.status(200)
                    .json({
                        status: 'success',
                        message: 'success to get data car',
                        result: result
                    })
            })
            .catch(err => {
                res.status(400)
                    .json({
                        status: 'failed',
                        message: 'failed to get data car',
                        result: err.message
                    })
            })
    },
    store: (req, res) => {
        Car.create({
            name: req.body.name,
            mount: req.body.mount
        })
        .then(result => {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'success to create new data',
                    result: result
                })
        })
        .catch(err => {
            res.status(400)
                .json({
                    status: 'failed',
                    message: 'failed to create new data',
                    error: err.message
                })
        })
    }
}

module.exports = carsController