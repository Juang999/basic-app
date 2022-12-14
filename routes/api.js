const express = require('express')
const router = express.Router()
const controller = require('../app/Http/Controller/controllers')

router.route('/store')
    .get(controller.StoreController.index)
    .post(controller.StoreController.store)

router.route('/store/:id')
    .get(controller.StoreController.show)
    .put(controller.StoreController.update)
    .delete(controller.StoreController.delete)

module.exports = router;