const router = require("express").Router();
require("express-async-errors");
const About = require("../model/about");
const auth = require("../middleware/auth");
const { admin, editor } = require("../middleware/auth");

router.get("/", async (req, res) => {
  let about = await About.findByPk(1, { attributes: ["about"] });
  return res.status(200).json(about);
});

router.put("/", [auth, editor], async (req, res) => {
  let { about } = req.body;
  let { error } = About.validate({ about });
  if (error) return res.status(422).send(error.details[0].message);
  await About.update({ about }, { where: { id: 1 } });
  return res.status(200).send("updated successfully");
});

module.exports = router;
