const express = require("express");
const router = express.Router();

const Product = require("../models/Product");

//Get
router.get("/", (req, res) => {
  const product = Product.find()
    //Sort title in the ascending order
    .then(doc => {
      console.log(doc);
      return res.status(200).json(doc);
    })
    .catch(err => {
      res.json({ message: err });
    });
});

//get By category
router.get("/:category", (req, res) => {
  const product = Product.find({ category: req.params.category })
    .then(doc => {
      res.status(200).json(doc);
    })
    .catch(err => {
      res.json({ message: err });
    });
});

//get By subcategory
router.get("/:category/:subcategory", async (req, res) => {
  const product = await Product.find({ series: req.params.subcategory })
    .then(doc => {
      res.status(200).json(doc);
    })
    .catch(err => {
      res.json({ message: err });
    });
});

// //get By productid
router.get("/:category/:subcategory/:productId", (req, res) => {
  const product = Product.findById(req.params.productId)
    .then(doc => {
      res.status(200).json(doc);
    })
    .catch(err => {
      res.json({ message: err });
    });
});

module.exports = router;
