const express = require("express");
const router = express.Router();

const Product = require("../models/Product");

//Get
router.get("/", (req, res) => {
  //const product = Product.find();
  const product = Product.find();
  product
    //Sort title in the ascending order
    .then((doc) => {
      return res.status(200).json(doc);
    })
    .catch((err) => {
      res.json({ message: err });
    });
});

//get By category
router.get("/:category", (req, res) => {
  const product = Product.find({ category: req.params.category })
    .then((doc) => {
      res.status(200).json(doc);
    })
    .catch((err) => {
      res.json({ message: err });
    });
});

//get By subcategory
router.get("/:category/:subcategory", (req, res) => {
  const product = Product.find({ series: req.params.subcategory })
    .then((doc) => {
      res.status(200).json(doc);
    })
    .catch((err) => {
      res.json({ message: err });
    });
});

// //get By productid
router.get("/:category/:subcategory/:productId", (req, res) => {
  const product = Product.findById(req.params.productId)
    .then((doc) => {
      res.status(200).json(doc);
    })
    .catch((err) => {
      res.json({ message: err });
    });
});

//Search
router.post("/search", (req, res) => {
  // search query
  const query = req.query.q;

  Product.find({
    title: {
      $regex: query,
      // case insensitive search
      $options: "i",
    },
  })
    .then((products) => {
      return res.status(200).json(products);
    })
    .catch((err) => {
      return res.status(501).json({
        error: err,
      });
    });
});

module.exports = router;
