const jwt = require("jsonwebtoken");
const config = require("../config");
const path = require("../path");

module.exports = (req, res, next) => {
  let token = req.header("x-auth-token");

  if (!token) return res.status(401).send("Access denied. no token provided");

  try {
    const decoded = jwt.verify(token, config.jwtPass);
    req.user = decoded;
  } catch (e) {
    return res.status(400).send("Invalid token");
  }
  next();
};

module.exports.admin = (req, res, next) => {
  if (!req.user.isAdmin) return res.status(403).send("Access denied");
  next();
};

module.exports.editor = (req, res, next) => {
  if (req.user.role !== "EDITOR" || !req.user.isAdmin) {
    return res.status(403).send("Access denied");
  }
  next();
};
