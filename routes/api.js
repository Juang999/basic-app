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

router.route('/goods')
    .get(controller.GoodsController.index)

router.route('/car')
    .get(controller.CarsController.index)
    .post(controller.CarsController.store)

router.route('/house')
    .get(controller.HouseController.index)
    .post(controller.HouseController.store)

router.route('/user')
    .get(controller.UserController.index)

router.post('/register', controller.UserController.register)

router.post('/login', controller.UserController.login)

module.exports = router;