const express = require("express");
const router = express.Router();
const passport = require("passport");

const Product = require("../models/Product");
const User = require("../models/User");
const Order = require("../models/Order");
const mongoose = require("mongoose");

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
router.get(
  "/users",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const role = req.user.role;
    // Check if user is admin
    if (!role) {
      return res.status(401).json({ Message: "Authentication failed." });
    }
    const user = User.find()
      .then(doc => {
        return res.status(200).json(doc);
      })
      .catch(err => {
        res.json({ message: err });
      });
  }
);

// Delete user
router.delete(
  "/users/:userId",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const role = req.user.role;
    // Check if user is admin
    if (!role) {
      return res.status(401).json({ Message: "Authentication failed." });
    }

    User.findById({ _id: req.params.userId }).then(user => {
      if (!user) {
        return res
          .status(404)
          .json({ message: `User with ID ${req.params.userId} Not Found` });
      }
    });
    User.deleteOne({ _id: req.params.userId })
      .then(result => {
        return res.status(200).json({ message: "User deleted" });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          Error: err
        });
      });
  }
);

// Create Order
router.post(
  "/orders",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const role = req.user.role;
    // Check if user is admin
    if (!role) {
      return res.status(401).json({ Message: "Authentication failed." });
    }

    const productId = req.body.productId;
    Product.findById({_id: req.body.productId})
    .then(product => {
      if(product) {
        const orders = new Order({
          orderNumber: mongoose.Types.ObjectId(),
          date: req.body.date,
          orderStatus: req.body.orderStatus,
          total: req.body.total,
          quantity: req.body.quantity,
          product: req.body.productId
        });
        orders
          .save()
          .then(doc => {
            return res.status(201).json(doc);
          })
          .catch(err => {
            res.status(404).json({
              message: "Something went wrong"
            })
          })
      }
    })
    .catch(err => {
      res.status(404).json({
        message: "Product not found"
      })
    })

  }
);

// Get all orders
router.get(
  "/orders",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const role = req.user.role;
    // Check if user is admin
    if (!role) {
      return res.status(401).json({ Message: "Authentication failed." });
    }
    Order.find()
      .populate('Product')
      .then(orders => {
        return res.status(200).json(orders);
      })
      .catch(err => {
        res.json({ message: err });
      });
  }
);

// Update order

router.patch("/orders/:orderId", passport.authenticate("jwt", { session: false }),
  (req, res) => {
  const role = req.user.role;
    // Check if user is admin
    if (!role) {
      return res.status(401).json({ Message: "Authentication failed." });
    }
    Order.updateOne(
      {_id: req.params.orderId},
      {
        $set: {
          orderStatus: req.body.orderStatus,
          quantity: req.body.quantity
        }
      }
      )
      .then(doc => {
        res.status(200).json(doc);
      })
      .catch(err => {
        res.json({ message: err });
      });
})

// Delete Order
router.delete("/orders/:orderId", passport.authenticate("jwt", { session: false }),
  (req, res) => {
  const role = req.user.role;
    // Check if user is admin
    if (!role) {
      return res.status(401).json({ Message: "Authentication failed." });
    }
    Order.findById({ _id: req.params.orderId }).then(order => {
      if (!order) {
        return res
          .status(404)
          .json({ message: `Order with ID ${req.params.orderId} Not Found` });
      }
      Order.deleteOne({ _id: req.params.orderId })
      .then(result => {
        return res.status(200).json({ message: "Order deleted" });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          Error: err
        });
      });
    })
})
module.exports = router;
