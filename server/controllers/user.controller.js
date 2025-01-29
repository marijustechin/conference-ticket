const { validationResult } = require("express-validator");
const userService = require("../services/user.service");

class UserController {
  async register(req, res, next) {
    try {
      // const errors = validationResult(req);

      // if (!errors.isEmpty()) {
      //   res.status(422).json({ errors: errors.array() });
      // }

      // const qrCode = await userService.qrCodeGenerator(req.body.email);
      const { fullName, email, githubName } = req.body;

      const user = await userService.register(fullName, email, githubName);

      res.status(200).json(user);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new UserController();
