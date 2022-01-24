const express = require("express");
const bcrypt = require("bcrypt");
//const jwt = require("jsonwebtoken");
const router = express.Router();
const models = require("../models");

/* POST /api/v1/users/register */
router.post("/register", function (req, res, next) {
  if (!req.body.email || !req.body.password) {
    res.status(400).json({ error: "please include all required fields" });
    return;
  }

  models.User.findAll({ where: { email: req.body.email } }).then((users) => {
    if (users.length > 0) {
      res.status(400).json({ error: "email already in use" });
      return;
    }

    bcrypt.hash(req.body.password, 10).then((hash) => {
      models.User.create({
        email: req.body.email,
        password: hash,
      }).then((user) => {
        res.status(201).json(user);
      });
    });
  });
});

router.post("/login", (req, res) => {
  if (!req.body.email || !req.body.password) {
    res.status(400).json({ error: "please include all required fields" });
    return;
  }

  models.User.findOne({ where: { email: req.body.email } }).then((user) => {
    if (!user) {
      res.status(404).json({ error: "could not find that email" });
      return;
    }

    bcrypt.compare(req.body.password, user.password).then((match) => {
      if (!match) {
        res.status(400).json({ error: "password incorrect" });
        return;
      }

      const token = jwt.sign(user.get({ plain: true }), process.env.JWT_SECRET);

      res.json({ success: "logged in", token });
    });
  });
});

module.exports = router;
