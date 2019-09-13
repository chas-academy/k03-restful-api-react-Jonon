const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Category = require("../models/Category");

//Get all categories
router.get("/", async (req, res) => {
  try {
    const category = await Category.find().populate("subcategories")
    //Sort title in the ascending order
    .sort({"title": 1})
    console.log(category)
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
    res.status(201).json(savedCategory);
  } catch (err) {
    res.json({ message: err });
  }
});

//get category by id
router.get("/:categoryId", async (req, res) => {
  try {
    const category = await Category.findById(req.params.categoryId).populate(
      "subcategories"
    );
    res.status(200).json(category);
  } catch (err) {
    res.json({ message: err });
  }
});

//Update category
router.patch("/:categoryId", async (req, res) => {
  try {
    const updatecategory = await Category.update(
      { _id: req.params.categoryId },
      {
        $addToSet: {subcategories: mongoose.Types.ObjectId()}
        
      }
    ).populate("subcategories");
    console.log(updatecategory)
    res.status(200).json(updatecategory);
  } catch (err) {
    res.json({ message: err });
  }
});

//Delete category
router.delete("/:categoryId", async (req, res) => {
  try {
    const removeCategory = await Category.deleteOne({ _id: req.params.categoryId })
    res.status(200).json(removeCategory);
  } catch (err) {
    res.json({ message: err });
  }
})

module.exports = router;
