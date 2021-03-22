const express = require("express");
const router = express.Router();
const passport = require("passport");
const mongoose = require("mongoose");

const Product = require("../models/Product");
const Order = require("../models/Order");
const User = require("../models/User");

// Create Order
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Product.findById({ _id: req.body.productId })
      .then(product => {
        if (product) {
          const orders = new Order({
            orderNumber: mongoose.Types.ObjectId(),
            date: req.body.date,
            orderStatus: req.body.orderStatus,
            total: req.body.total,
            quantity: req.body.quantity,
            product: req.body.productId,
            user: req.user.id
          });
          orders
            .save()
            .then(doc => {
              return res.status(201).json(doc);
            })
            .catch(err => {
              res.status(404).json({
                message: err
              });
            });
        }
      })
      .catch(err => {
        res.status(500).json({
          error: "Product not found"
        });
      });
  }
);

module.exports = router;
