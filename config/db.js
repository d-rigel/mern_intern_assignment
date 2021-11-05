const mongoose = require("mongoose");
const config = require("config");
// const { MONGO_URI } = require("./default");

const MONGO_URI = config.get("MONGO_URI");
console.log(MONGO_URI);

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = connectDB;
