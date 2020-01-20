const router = require("express").Router();
require("express-async-errors");

const fileUpload = require("express-fileupload");
router.use(fileUpload());
const slugify = require("slugify");
const fs = require("fs");

const auth = require("../middleware/auth");
const { admin, editor } = require("../middleware/auth");

const Event = require("../model/event");
const Comment = require("../model/comment");

router.get("/", async (req, res, next) => {
  let limit = req.query.limit ? req.query.limit : null;

  let events = await Event.findAll({
    order: [["createdAt", "DESC"]],
    limit,
    include: [{ model: Comment }]
  });
  return res.status(200).json(events);
});

router.get("/:slugTitle", async (req, res) => {
  let { slugTitle } = req.params;
  let event = await Event.findOne({
    where: { slugTitle },
    include: [
      {
        model: Comment,
        order: [["createdAt", "DESC"]]
      }
    ]
  });

  if (!event) return res.status(400).send("Event not found");
  return res.status(200).json(event);
});

router.post("/", [auth, admin], async (req, res) => {
  let { text, title, date } = req.body;
  if (!req.files || !req.files.imagefile)
    return res.status(400).send("Image is required");

  let { imagefile, uploadPath, imageName, mimetype } = getImgProps(req.files);
  let { error } = Event.validate({ mimetype, text, title, date });
  if (error) return res.status(422).send(error.details[0].message);

  let slugTitle = slugify(title);
  let [data, created] = await Event.findOrCreate({
    where: { slugTitle },
    defaults: { imageName, text, title, createdAt: date }
  });
  if (!created) return res.status(400).send("Event already exist");

  Event.uploadImage(imagefile, uploadPath);
  return res.status(201).json(data);
});

router.delete("/:id", [auth, admin], async (req, res) => {
  let { id } = req.params;
  let event = await Event.findByPk(id, { attributes: ["imageName"] });
  if (!event) return res.status(400).send("invalid user id");

  fs.unlink(path.postFolder + `/${event.imageName}`, e => {
    if (e) res.status(500).send(e);
  });
  Event.destroy({ where: { id } });
  return res.status(200).send("deleted succefully");
});

router.put("/:slugTitle", [auth, admin], async (req, res) => {
  let { title, text } = req.body;
  let { slugTitle } = req.params;

  let event = await Event.findOne({ where: { slugTitle } });
  if (!event) return res.status(400).send("Event does not exist");

  let { error: inputError } = Event.validateInputText({ text, title });
  if (inputError) return res.status(422).send(inputError.details[0].message);
  let updateFields = { text, title };

  if (!!req.files && !!req.files.imagefile) {
    fs.unlink(path.postFolder + `/${event.imageName}`, e => {
      if (e) return res.status(500).send(e);
    });
    let { imagefile, uploadPath, imageName, mimetype } = getImgProps(req.files);
    let { error } = Event.validationImage({ mimetype });
    if (error) return res.status(422).send(error.details[0].message);
    Event.uploadImage(imagefile, uploadPath);
    updateFields.imageName = imageName;
  }

  await Event.update(updateFields, { where: { slugTitle } });
  return res.status(200).send("Event Updated succefully");
});

router.post("/comment/:eventId", async (req, res) => {
  let { eventId } = req.params;
  let { name, slugTitle, comment } = req.body;
  let { error } = Comment.validate({ eventId, name, comment });

  if (error) return res.status(422).send(error.details[0].message);
  await Comment.create({ name, eventId, slugTitle, comment });

  return res.status(201).send("success");
});

router.put("/like/:slugTitle", auth, async (req, res) => {
  // let {slugTitle} = req.params;
  // let event =await Event.findOne({where:{slugTitle}});
  // if(!event) return res.status(400).send('Event not found');
  // if(event.likes.includes(req.user.id)) return res.status(400).send("user already liked this page");
  // let likes = [...event.likes, req.user.id]
  // await Event.update({likes}, {where:{slugTitle}} )
  // return  res.status(200).send("success")
});

let getImgProps = file => {
  let {
    imagefile,
    imagefile: { mimetype }
  } = file;
  let date = new Date().toISOString().replace(/:/g, "");

  let imageName = `${date}event.jpg`;
  let uploadPath = `${path.postFolder}/${imageName}`;
  return { uploadPath, imageName, mimetype, imagefile };
};

module.exports = router;
