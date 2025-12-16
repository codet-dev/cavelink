import express from "express"
import userController from "../controller/admin-controller.js"
import cartController from "../controller/cart-controller.js";
import userProductController from "../controller/user-product-controller.js";
const publicRouter = new express.Router()

publicRouter.post('/api/users', userController.register)
publicRouter.post('/api/users/login', userController.login)


publicRouter.post('/api/:username/carts', cartController.create);
publicRouter.get('/api/:username/carts', cartController.get);

publicRouter.get('/api/:username/:id', userProductController.get);

export {
    publicRouter
}
