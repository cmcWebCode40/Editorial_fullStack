const router = require("express").Router();
require("express-async-errors");
const Gallery = require("../model/gallery");

const auth = require("../middleware/auth");
const { admin } = require("../middleware/auth");

const fileUpload = require("express-fileupload");
router.use(fileUpload());
const fs = require("fs");

router.get("/", async (req, res) => {
  let limit = req.query.limit ? req.query.limit : null;
  const gallery = await Gallery.findAll({ limit });
  res.status(200).json(gallery);
});

router.post("/", [auth, admin], async (req, res) => {
  if (!req.files) return res.status(400).send("image is required");

  let { text } = req.body;
  let { imagefile, uploadPath, imageName, mimetype } = getImgProps(req.files);

  let { error } = Gallery.validate({ imagefile, mimetype, text });
  if (error) return res.status(422).send(error.details[0].message);

  Gallery.uploadImage(imagefile, uploadPath);
  let gallery = await Gallery.create({ imageName, text });
  return res.status(200).send(gallery);
});

router.delete("/:id", [auth, admin], async (req, res) => {
  let { id } = req.params;
  let gallery = Gallery.findByPk(1, { attributes: [src] });
  await Gallery.destroy({ where: { id } });
  fs.unlink(path.galleryFolder + `/${gallery.src}`, e => {
    if (e) console.log(e);
  });
  return res.status(200).send("your gallery was deleted succcessfully");
});

const getImgProps = file => {
  let {
    imagefile,
    imagefile: { mimetype }
  } = file;
  let date = new Date().toISOString().replace(/:/g, "");

  let imageName = `${date}gallery.jpg`;
  let uploadPath = `${path.galleryFolder}/${imageName}`;
  return { uploadPath, imageName, mimetype, imagefile };
};

module.exports = router;
