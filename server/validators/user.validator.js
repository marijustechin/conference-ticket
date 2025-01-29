const { body } = require("express-validator");

exports.registerValidator = [
  body("fullName", "Vardas ir pavarde privalomi").not().isEmpty(),
  body("fullName", "Vardas ir pavarde gali buti sudaryti tik is raidziu")
    .trim()
    .isAlpha(),
  body("email", "Netinkamas el. pasto formatas").trim().isEmail(),
  body("githubName"),
];
