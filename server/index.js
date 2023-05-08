const express = require("express");
const { connectDB } = require("./database");
const expressApp = require("./expressApp");

const startServer = async () => {
  const app = express();

  const PORT = "8080";

  await connectDB();
  await expressApp(app);

  app
    .listen(PORT, () => {
      console.log(`listening to port ${PORT}`);
    })
    .on("error", (error) => {
      console.log(error);
      process.exit();
    });
};

startServer();
