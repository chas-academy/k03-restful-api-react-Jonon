const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Product = require("../models/Product");

//Get
router.get("/", async (req, res) => {
  try {
    const product = await Product.find()
      //Sort title in the ascending order
      .sort({ title: 1 });
    res.status(200).json(product);
  } catch (err) {
    res.json({ message: err });
  }
});

//Post
router.post("/", async (req, res) => {
  const product = new Product({
    title: req.body.title,
    poster: req.body.poster,
    description: req.body.description,
    writer: req.body.writer,
    artist: req.body.artist,
    coverArtist: req.body.coverArtist,
    publisher: req.body.publisher,
    publicationDate: req.body.publicationDate,
    pages: req.body.pages,
    price: req.body.price,
    inventory: req.body.inventory,
    category: req.body.category,
    series: req.body.series
  });
  try {
    const savedPost = await product.save();
    res.status(201).json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

//get By category
router.get("/:category", async (req, res) => {
  try {
    const product = await Product.find({ category: req.params.category });
    res.status(200).json(product);
  } catch (err) {
    res.json({ message: err });
  }
});

//get By subcategory
router.get("/:category/:subcategory", async (req, res) => {
  try {
    const product = await Product.find({ series: req.params.subcategory });
    res.status(200).json(product);
  } catch (err) {
    res.json({ message: err });
  }
});

// //get By productid
router.get("/:category/:subcategory/:productId", async (req, res) => {
  try {
    const product = await Product.findById(req.params.productId);
    res.status(200).json(product);
  } catch (err) {
    res.json({ message: err });
  }
});

//Update product
router.patch("/:productId", async (req, res) => {
  try {
    const updateProduct = await Product.updateOne(
      { _id: req.params.productId },
      {
        $set: {
          title: req.body.title,
          inventory: req.body.inventory,
          description: req.body.description,
          category: req.body.category
        }
      }
    );
    res.status(200).json(updateProduct);
  } catch (err) {
    res.json({ message: err });
  }
});

//Delete product
router.delete("/:productId", async (req, res) => {
  try {
    const removeProduct = await Product.deleteOne({
      _id: req.params.productId
    });
    res.status(200).json(removeProduct);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
