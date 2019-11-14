const express = require("express");
const router = express.Router();
const passport = require('passport');

const Product = require("../models/Product");
const User = require("../models/User");

// Get all all products
router.get("/", passport.authenticate("jwt", {session: false}), (req, res) => {
    const role = req.user.role;
    // Check if user is admin
    if (!role) {
        return res.status(401).json({Message: "Authentication failed."})
    }
    Product.find().then(products => {
        res.status(200).json({products})
    }).catch(err => {
        res.json({message: err})
    })
})


// Create product

// Update product

// Delete product

// Get all users

// Delete user

// Get all orders

// Create Order

// Update order

// Delete Order

module.exports = router;