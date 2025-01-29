const Router = require("express").Router;
const validate = require("../validators/user.validator");
const userController = require("../controllers/user.controller");

const userRouter = new Router();

userRouter.post("/", validate.registerValidator, userController.register);

module.exports = userRouter;
