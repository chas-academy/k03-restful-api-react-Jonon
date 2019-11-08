const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Category = require("../models/Category");

//Get all categories
router.get("/", (req, res) => {
    const category = Category.find()
    //Sort title in the ascending order
    .sort({title: 1})
    .then(doc => {
      console.log(doc);
      return res.status(200).json(doc);
    })
    .catch(err => {
      res.json({ message: err });
    });
});

//Post category
router.post("/", (req, res) => {
  const category = new Category(req.body);
    const savedCategory =  category.save()
    .then(doc => {
      console.log(doc);
      return res.status(201).json(doc);
    })
    .catch(err => {
      res.json({ message: err });
    });
});


//Update category
router.patch("/:categoryId", (req, res) => {
    const updateCategory = Category.updateMany(
      { _id: req.params.categoryId },
      {
        $addToSet: req.body
      }
    )
    .then(doc => {
      console.log(doc);
      return res.status(200).json(doc);
    })
    .catch(err => {
      res.json({ message: err });
    });
});

//Delete category
router.delete("/:categoryId", (req, res) => {
    const removeCategory = Category.deleteOne({
      _id: req.params.categoryId
    })
    .then(doc => {
      console.log(doc);
      return res.status(200).json(doc);
    })
    .catch(err => {
      res.json({ message: err });
    });
});

module.exports = router;
