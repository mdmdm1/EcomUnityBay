const jwt = require("jsonwebtoken");
const User = require("../models/User");
const auth = require("./auth");

const requireRole = (role) => {
  return async (req, res, next) => {
    try {
      await auth(req, res, async () => {
        const user = req.user;
        if (user.role != role) {
          return res.status(403).json({ message: "acces denied" });
        }
        next();
      });
    } catch (err) {
      res.status(401).json({ message: "Authaentification failed" });
    }
  };
};

module.exports = requireRole;
