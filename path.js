const { join } = require("path");
module.exports = path = {
  postFolder: join(__dirname, "public", "img", "post"),
  galleryFolder: join(__dirname, "public", "img", "gallery")
};
