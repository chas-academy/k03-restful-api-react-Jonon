const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Product = require("../models/Product");

//Get
router.get("/", async (req, res) => {
  try {
    const product = await Product.find();
    res.json(product);
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
    inventory: req.body.inventory
  });
  try {
    const savedPost = await product.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

//get By Id
router.get("/:productId", async (req, res) => {
  try {
    const product = await Product.findById(req.params.productId);
    res.json(product);
  } catch (err) {
    res.json({ message: err });
  }
});

//Update product
router.patch("/:productId", async (req, res) => {
  try {
    const updateProduct = await Product.updateOne(
      { _id: req.params.productId },
      { $set: { inventory: req.body.inventory } }
    );
    res.json(updateProduct);
  } catch (err) {
    res.json({ message: err });
  }
});

//Delete product
router.delete("/:productId", async (req, res) => {
  try {
    const removeProduct = await Product.deleteOne({ _id: req.params.productId });
    res.json(removeProduct);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
