const json = require("express").json;
const { student } = require("./routes");

module.exports = async (app) => {
  app.use(json());

  app.use("/student", student);
};
