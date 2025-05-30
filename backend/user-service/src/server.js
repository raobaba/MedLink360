const express = require("express");
require("dotenv").config();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");
const Connection = require("./config/db");
const YAML = require("yamljs");
const path = require("path");
const swaggerUi = require("swagger-ui-express");
const userRouter = require("./routes/user.route.js");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Load Swagger API Spec
const apiSpecPath = path.join(__dirname, "swagger.yaml");
const apiSpec = YAML.load(apiSpecPath);
// Swagger API Documentation
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(apiSpec));

app.use(
  fileUpload({
    useTempFiles: true,
  })
);
app.use(cors());

Connection();
app.use("/api/v1/user", userRouter);
console.log(app.listenerCount("connection"));
app.get("/", (req, res) => {
  res.send("Server is Running! 🚀");
});

module.exports = app;
