const mongoose = require("mongoose");
require("dotenv").config();

const Connection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("API Gateway database connected successfully");
  } catch (err) {
    console.log("Error", err.message);
  }
};

module.exports = Connection;
