const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const User = sequelize.define("user", {
  fullName: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: "Vardas privalomas",
      },
      notEmpty: {
        msg: "Vardas privalomas",
      },
    },
  },

  email: {
    type: DataTypes.STRING,
    unique: {
      args: true,
      msg: "Toks el. pasto adresas jau naudojamas",
    },
    allowNull: false,
    validate: {
      notNull: {
        msg: "El. pastas privalomas",
      },
      notEmpty: {
        msg: "El. pastas privalomas",
      },
      isEmail: {
        msg: "Neteisingas el. pasto formatas",
      },
    },
  },
  githubName: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: "Slaptazodis privalomas",
      },
      notEmpty: {
        msg: "Slaptazodis privalomas",
      },
    },
  },
  qrCode: {
    type: DataTypes.STRING,
  },
});

module.exports = User;
