const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const bcrypt = require("bcrypt");
const saltRounds = 10;

const User = require("../models/User");

//Get
router.get("/", async (req, res) => {
  try {
    const user = await User.find();
    res.status(200).json(user);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/register", (req, res) => {
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      // Check if user exist
      return res.status(409).json({
        message: "Mail exist"
      });
    } else {
      hashedPassword = bcrypt.hash(
        req.body.password,
        saltRounds,
        async (err, hash) => {
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
            try {
              const savedUser = await user.save();
              res.status(201).json({
                message: "User Created"
              });
              console.log(savedUser);
            } catch (err) {
              res.status(500).json({ message: err });
            }
          }
        }
      );
    }
  });
});


router.delete("/:userId", async (req, res) => {
  try {
    const findUser = await User.find({ _id: req.params.userId })
    .then(
      result => {
        console.log(result);
        if (result.length == 0) {
          return res.status(400).json({ message: "Id not found" });
        }
      }
    );
    const removeUser = await User.deleteOne({
      _id: req.params.userId
    });
    res.status(200).json({ message: "User deleted" });

  } catch (error) {
    res.json({ message: "Something went wrong." });
  }
});

module.exports = router;
