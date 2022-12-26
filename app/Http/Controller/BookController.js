const { Book } = require('../../../models')
const auth = require('../../../tools/auth')

const bookController = {
    index: async (req, res) => {
        try {
            let book = Book.findAll();

            res.status(200)
                .json({
                    status: 'success',
                    message: 'success to get book data',
                    data: book
                })
        } catch (error) {
            res.status(400)
                .json({
                    status: 'failed',
                    message: 'failed to get book data',
                    error: error.message
                })
        }
    },
    store: async (req, res) => {
        try {
            let user = auth(req)

            let createBook = Book.create({
                user_id: user.id,
                name: req.body.name,
                amount: req.body.amount
            })

            res.status(200)
                .json({
                    status: 'success',
                    message: 'success to create book data',
                    result: createBook
                })
        } catch (error) {
            res.status(400)
                .json({
                    status: 'failed',
                    message: 'failed to create book data',
                    error: error.message
                })
        }
    }
}

module.exports = bookController