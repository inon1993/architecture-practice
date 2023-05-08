const mongoose = require("mongoose");

module.exports = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1/architecture_practice", {
      useNewUrlParser: true,
    });
    console.log("Mongoose is connected.");
  } catch (error) {
    console.log("Error -----------");
    console.log(error);
    process.exit(1);
  }
};
