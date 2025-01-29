const qrCode = require("qrcode");
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const User = require("../models/user.model");
const UserDto = require("../dtos/user.dto");
const ApiError = require("../middlewares/api.error");

class UserService {
  async #qrCodeGenerator(userEmail) {
    const rootDir = path.dirname(process.argv[1]);
    const fileName = uuidv4() + ".png";
    const fullPath = path.join(rootDir, "public", fileName);

    qrCode.toFile(
      fullPath,
      userEmail,
      {
        color: {
          dark: "#00F",
          light: "#0000",
        },
      },
      function (err) {
        if (err) throw err;
      }
    );

    return fileName;
  }

  async register(fullName, email, githubName) {
    const existingUser = await User.findOne({ where: { email } });

    if (existingUser)
      throw ApiError.BadRequest(`El. pašto adresas ${email} jau naudojamas`);

    const qrCode = await this.#qrCodeGenerator(email);

    const newUser = await User.create({ fullName, email, githubName, qrCode });

    const userDto = new UserDto(newUser);
    return userDto;
  }
}

module.exports = new UserService();
