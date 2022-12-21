const { Goods } = require('../../../models')

const GoodsController = {
    index: (req, res) => {
        try {
            var data = Goods.findAll()
            res.status(200)
                .json({
                    theData: data
                })
        } catch (error) {
            res.status(400)
                .json({
                    error: error.message
                })
        }
    }
}

module.exports = GoodsController;