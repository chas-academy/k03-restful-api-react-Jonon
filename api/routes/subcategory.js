const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Subcategory = require("../models/Subcategory");

//Get
router.get("/", async (req, res) => {
  try {
    const subcategory = await Subcategory.find()
    res.status(200).json(subcategory);
  } catch (err) {
    res.json({ message: err });
  }
});

//Post
router.post("/", async (req, res) => {
  const subcategory = new Subcategory({
    title: req.body.title,
  });
  try {
    const savedsubcategory = await subcategory.save();
    res.status(201).json(savedsubcategory);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
