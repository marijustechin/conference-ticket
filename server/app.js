const express = require("express");
const cors = require("cors");
const errorsMiddleware = require("./middlewares/errors.middleware");

//////// testas
const path = require("path");
const imageDir = path.join(__dirname, "public");
/////////////

// endpointai
const userRouter = require("./routers/user.router");

const app = express();

// Midlvares visokios
app.use(express.json());

app.use(
  cors({
    // Dėl slapukų ir cross-origin resource share
    // turi būti nurodomas fronto URL
    credentials: true,
    origin: process.env.CLIENT_URL,
  })
);

//////////////////// servinam public kataloga
app.use(express.static(imageDir));
/////////////////////////////////////////////

app.use("/api/v1/conf", userRouter);

// sitoj eilej klaidos turi buti paskutines
app.use(errorsMiddleware);

module.exports = app;
