const router = require("express").Router();
require("express-async-errors");
const ContactUs = require("../model/contact");
const auth = require("../middleware/auth");
const { editor } = require("../middleware/auth");

router.get("/", auth, async (req, res) => {
  let limit = req.query.limit ? req.query.limit : null;
  let contactUs = await ContactUs.findAll({ limit });
  return res.status(200).json(contactUs);
});

router.get("/:id", [auth, editor], async (req, res) => {
  let { id } = req.params;
  let contactUs = await ContactUs.findByPk(id);
  if (!contactUs) return res.status(400).send("id does not exist");
  ContactUs.update({ status: "read" }, { where: { id } });
  return res.status(200).json(contactUs);
});

router.post("/", async (req, res) => {
  let { name, stateCode, email, pnumber, message } = req.body;
  let { error } = ContactUs.validate({
    name,
    stateCode,
    email,
    pnumber,
    message
  });
  if (error) return res.status(422).send(error.details[0].message);

  await ContactUs.create({ name, stateCode, email, pnumber, message });
  return res.status(201).send("success");
});

router.delete("/:id", [auth, editor], async (req, res) => {
  let { id } = req.params;
  let message = await ContactUs.findByPk(id);
  if (!message) return res.status(400).send("Id does not exist");
  await ContactUs.destroy({ where: { id } });
  return res.status(203).send("success");
});

module.exports = router;
