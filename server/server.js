require("dotenv").config();
const port = process.env.PORT || 3003;

// duombaze ir lenteles
const sequelize = require("./db");
const userModel = require("./models/user.model");

const app = require("./app");

const startServer = async () => {
  try {
    // prisijungiam prie db
    await sequelize.authenticate();
    // sinchronizuojam modelius su db
    // prodakšine atjungiam sinchronizaivmo funkciją
    await sequelize.sync({ force: true });

    app.listen(port, () => {
      console.log(`Serveris veikia. Prievadas: ${port}`);
    });
  } catch (e) {
    console.log(e);
  }
};

startServer();
