const router = require("express").Router();
require("express-async-errors");
const User = require("../model/user");
const auth = require("../middleware/auth");
const { admin, editor } = require("../middleware/auth");

router.get("/", [auth, admin], async (req, res) => {
  let limit = req.query.limit ? req.query.limit : null;
  let users = await User.findAll({ limit });
  res.status(200).json(users);
});

router.post("/registration", async (req, res) => {
  let { stateCode, password, confirmPassword } = req.body;

  let { error } = User.validateRegistration({
    stateCode,
    password,
    confirmPassword
  });
  if (error) return res.status(400).send(error.details[0].message);

  let user = await User.findOne({ where: { stateCode } });
  if (user) return res.status(400).send("User already exist");

  user = await User.create({ stateCode, password });
  return res.status(200).send(user);
});

router.post("/login", async (req, res) => {
  let { stateCode, password } = req.body;

  let { error } = User.validateLogin({ stateCode, password });
  if (error) return res.status(400).send(error.details[0].message);

  let user = await User.findOne({ where: { stateCode } });
  if (!user) return res.status(400).send("incorrect credentials");

  let passwordValid = await User.verifyPassword(password, user.password);
  if (!passwordValid) return res.status(400).send("incorrect credentials");

  let token = User.generateAuthToken({
    id: user.id,
    isAdmin: user.isAdmin,
    isSuperAdmin: user.isSuperAdmin,
    stateCode: user.stateCode
  });
  return res
    .status(200)
    .header("x-auth-token", token)
    .send("login successful");
});

router.get("/profile/:id", [auth, admin, editor], async (req, res) => {
  let { id } = req.params;
  let user = await User.findOne({ where: { id } });
  if (!user) return res.status(400).send("User not found");
  return res.status(200).json(user);
});

router.post(
  "/permission/:rank/:id",
  [auth, admin, editor],
  async (req, res) => {
    const { id, rank } = req.params;
    let isAdmin = false;

    let user = await User.findByPk(id, { attributes: ["role"] });
    if (!user) return res.status(400).send("Invalid User Id");

    let editorCount = await User.count({ where: { role: "EDITOR" } });

    if (user.role === "EDITOR" && editorCount <= 1 && rank !== "EDITOR") {
      return res
        .status(400)
        .send(
          "You are not allowed to change your rank unless there is a new editor"
        );
    }

    if (rank === "EDITOR" && editorCount >= 2) {
      return res.status(400).send("Maximium allowed editors is two (2)");
    }

    if (rank === "EDITOR" || rank === "MODERATOR") isAdmin = true;

    await User.update({ role: rank, isAdmin }, { where: { id } });
    return res.status(200).send("success");
  }
);

router.delete("/:id", [auth, admin, editor], async (req, res) => {
  let { id } = req.params;

  let user = await User.findByPk(id, { attributes: ["role"] });
  if (!user) return res.status(400).send("Invalid User Id");

  let editorCount = await User.count({ where: { role: "EDITOR" } });

  if (user.role === "EDITOR" && editorCount <= 1) {
    return res
      .status(400)
      .send(
        "You are not allowed to delete yourself unless there is a new editor"
      );
  }

  await User.destroy({ where: { id } });
  return res.status(200).send("user deleted successfully");
});

module.exports = router;
