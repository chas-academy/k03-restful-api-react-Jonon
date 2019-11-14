const express = require("express");
const router = express.Router();
const passport = require("passport");

const Product = require("../models/Product");
const User = require("../models/User");

// Get all all products
router.get(
  "/products",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const role = req.user.role;
    // Check if user is admin
    if (!role) {
      return res.status(401).json({ Message: "Authentication failed." });
    }
    Product.find()
      .then(products => {
        res.status(200).json({ products });
      })
      .catch(err => {
        res.json({ message: err });
      });
  }
);

// Create product
router.post(
  "/products",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const role = req.user.role;
    // Check if user is admin
    if (!role) {
      return res.status(401).json({ Message: "Authentication failed." });
    }

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

    product
      .save()
      .then(doc => {
        return res.status(201).json(doc);
      })
      .catch(err => {
        res.json({ message: err });
      });
  }
);

// Update product
router.patch(
  "/products/:productId",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const role = req.user.role;
    // Check if user is admin
    if (!role) {
      return res.status(401).json({ Message: "Authentication failed." });
    }

    const updateProduct = Product.updateOne(
      { _id: req.params.productId },
      {
        $set: {
          title: req.body.title,
          poster: req.body.poster,
          description: req.body.description,
          writer: req.body.writer,
          artist: req.body.artist,
          coverArtist: req.body.coverArtist,
          publisher: req.body.publisher,
          pages: req.body.pages,
          price: req.body.price,
          inventory: req.body.inventory,
          category: req.body.category,
          series: req.body.series
        }
      }
    )
      .then(doc => {
        res.status(200).json(doc);
      })
      .catch(err => {
        res.json({ message: err });
      });
  }
);

// Delete product
router.delete(
  "/products/:productId",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const role = req.user.role;
    // Check if user is admin
    if (!role) {
      return res.status(401).json({ Message: "Authentication failed." });
    }

    const removeProduct = Product.deleteOne({
      _id: req.params.productId
    })
      .then(doc => {
        res.status(200).json(doc);
      })
      .catch(err => {
        res.json({ message: err });
      });
  }
);

// Get all users

// Delete user

// Get all orders

// Create Order

// Update order

// Delete Order

module.exports = router;
