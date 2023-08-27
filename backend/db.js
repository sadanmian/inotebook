// const mongoose = require("mongoose");
// const mongoURI = "mongodb://localhost:27017";

// const connectToMongo = () => {
//   mongoose.connect(mongoURI, () => {
//     console.log("Connected To Mongo");
//   });
// };

// module.exports = connectToMongo

const mongoose = require("mongoose");
const mongoURI = "mongodb://localhost:27017";

const connectToMongo = async () => {
  try {
    // mongoose.set("strictQuery", false);
    mongoose.connect(mongoURI);
    console.log("Connected to Mongo Successfully!!!");
  } catch (error) {
    console.log(error);
    // process.exit();
  }
};
module.exports = connectToMongo;
