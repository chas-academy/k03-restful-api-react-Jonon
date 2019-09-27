const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Category = require("../models/Category");

//Get all categories
router.get("/", async (req, res) => {
  try {
    const category = await Category.find()
    //Sort title in the ascending order
    .sort({title: 1})
    res.status(200).json(category);
  } catch (err) {
    res.json({ message: err });
  }
});

//Post category
router.post("/", async (req, res) => {
  const category = new Category(req.body);
  try {
    const savedCategory = await category.save();
    console.log(savedCategory);
    res.status(201).json(savedCategory);
  } catch (err) {
    res.json({ message: err });
  }
});


//Update category
router.patch("/:categoryId", async (req, res) => {
  try {
    const updateCategory = await Category.updateMany(
      { _id: req.params.categoryId },
      {
        $addToSet: req.body
      }
    );
    console.log(updateCategory);
    res.status(200).json(updateCategory);
  } catch (err) {
    res.json({ message: err });
  }
});

//Delete category
router.delete("/:categoryId", async (req, res) => {
  try {
    const removeCategory = await Category.deleteOne({
      _id: req.params.categoryId
    });
    res.status(200).json(removeCategory);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
