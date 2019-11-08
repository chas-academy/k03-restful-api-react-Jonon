const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const bcrypt = require("bcrypt");
const saltRounds = 10;

const User = require("../models/User");

//Get
router.get("/", (req, res) => {
  const user = User.find()
    .then(doc => {
      console.log(doc);
      return res.status(200).json(doc);
    })
    .catch(err => {
      res.json({ message: err });
    });
});

router.post("/register", (req, res) => {
  User.findOne({ email: req.body.email })
    .then(user => {
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
              password: hash
            });
            user
            .save()
            .then(result => {
              console.log(result);
              res.status(201).json({
                message: "User Created"
              })
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

router.post("/login", async (req, res) => {
  try {
    await User.find({ email: req.body.email }).then(user => {
      if (user.length < 1) {
        return res.status(401).json({
          message: "Auth failed"
        });
      }
      console.log(user[0].password);
    });
  } catch (error) {}
});

router.delete("/:userId", (req, res) => {
  User.findById({ _id: req.params.userId })
    .then(user => {
      if (!user) {
        res.status(200).json({ message: `User with ID ${req.params.userId} Not Found` });
      } 
    })
    User.deleteOne({ _id: req.params.userId })
    .then(result => {
      res.status(200).json({ message: "User deleted" });
    }) 
    .catch(err => {
      console.log(err);
      res.status(500).json({
        Error: err
      });
    });
});

module.exports = router;
