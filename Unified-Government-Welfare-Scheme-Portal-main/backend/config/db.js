const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connectionInstance=await mongoose.connect(process.env.MONGODB_URL, {
        dbName: process.env.DB_NAME
      })
      console.log(`\n MongoDB Connected! DB Host: ${connectionInstance.connection.host}`)
    // await mongoose.connect(process.env.MONGO_URI);
    // console.log("MongoDB Connected");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;

