require("dotenv/config");
const mongoose = require("mongoose");
const uri = process.env.DB_CONNECTION;

//connect to DB
const connectDb = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDb is connected!");
  } catch (err) {
    console.log(error);
    process.exit(1);
  }
};
module.exports = connectDb;
