const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const passportjwt = require("passport-jwt");
require("dotenv/config");
const keys = require("../config/keys");

const bcrypt = require("bcrypt");
const saltRounds = 10;

const User = require("../models/User");
const Order = require("../models/Order");

router.post("/register", (req, res) => {
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      // Check if user exist
      return res.status(409).json({
        message: "Mail exist"
      });
    } else {
      bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
        if (err) {
          return res.status(500).json({
            error: err
          });
        } else {
          const user = new User({
            name: req.body.name,
            username: req.body.username,
            email: req.body.email,
            password: hash,
            role: req.body.role
          });
          user
            .save()
            .then(result => {
              console.log(result);
              res.status(201).json({
                message: "User Created"
              });
            })
            .catch(err => {
              console.log(err);
              res.status(500).json({
                error: err
              });
            });
        }
      });
    }
  });
});

router.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const username = req.body.username;
  User.findOne({ $or: [{ email }, { username }] })
    .then(user => {
      if (!user) {
        return res.status(401).json({
          message: "Auth failed"
        });
      }
      // compare password
      bcrypt.compare(password, user.password).then(isMatch => {
        if (isMatch) {
          const payload = {
            id: user.id,
            name: user.name,
            username: user.username,
            email: user.email,
            email: user.role
          };
          jwt.sign(
            payload,
            keys.secretOrKey,
            { expiresIn: 86400 },
            (err, token) => {
              res.json({
                success: true,
                token: `Bearer ${token}`
              });
            }
          );
        } else {
          return res.status(400).json({ message: "Incorrect password" });
        }
      });
    })
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
});

router.get(
  "/:username/profile",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({
      id: req.user.id,
      name: req.user.name,
      username: req.user.username,
      email: req.user.email
    });
  }
);

router.get(
  "/:username/profile/my-orders/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    // Check if user is authorized
    if (req.params.username !== req.user.username) {
      return res.status("401").json({ Message: "Authentication failed." });
    }
    Order.aggregate([
      {
        $lookup: {
          from: "products",
          localField: "product",
          foreignField: "_id",
          as: "product"
        }
      },
      {
        $lookup: {
          from: "users",
          localField: "user",
          foreignField: "_id",
          as: "user"
        }
      },
      { $match: { "user.username": req.user.username } }
    ])
      .then(orders => {
        return res.status(200).json(orders);
      })
      .catch(err => {
        res.json({ message: err });
      });
  }
);

module.exports = router;
