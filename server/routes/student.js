const router = require("express").Router();
const { studentServices } = require("../services");

router
  .post("/signup", async (req, res) => {
    try {
      const { name } = req.body;
      const data = await studentServices.signup({ name });
      return res.status(200).json(data);
    } catch (error) {
      console.log(error);
      res.status(500).json(`Internal sever error: ${error}`);
    }
  })

  .get("/find", async (req, res) => {
    try {
      const name = req.query.name;
      console.log(name);
      const data = await studentServices.getStudent(name);
      return res.status(200).json(data);
    } catch (error) {
      console.log(error);
      res.status(500).json(`Internal sever error: ${error}`);
    }
  });

module.exports = router;
