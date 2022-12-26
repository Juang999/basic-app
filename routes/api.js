const express = require('express')
const router = express.Router()
const controller = require('../app/Http/Controller/controllers')
const middleware = require('../app/Http/Middleware/middleware')

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
    .get([middleware.auth], controller.CarsController.index)
    .post(controller.CarsController.store)

router.route('/house')
    .get(controller.HouseController.index)
    .post(controller.HouseController.store)

// router for user
router.route('/user')
    .get(controller.UserController.index)

router.post('/register', controller.UserController.register)

router.post('/login', controller.UserController.login)

router.get('/profile', [middleware.auth], controller.UserController.profile)

router.route('/book')
    .get([middleware.auth], controller.BookController.index)
    .post([middleware.auth], controller.BookController.store)

module.exports = router;