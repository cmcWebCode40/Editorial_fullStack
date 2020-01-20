const express = require("express");
const auth = require("../middleware/auth");
const { admin } = require("../middleware/auth");
const errorHandler = require("../middleware/errorHandling");

const contact = require("./contact");
const gallery = require("./gallery");
const user = require("./user");
const about = require("./about");
const event = require("./event");

module.exports = function(app) {
  app.use("/api/event", event);
  app.use("/api/contact", contact);
  app.use("/api/gallery", gallery);
  app.use("/api/user", user);
  app.use("/api/about", about);
  app.use(errorHandler);
};
