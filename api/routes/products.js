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

//Post
router.post("/", (req, res) => {
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

//Update product
router.patch("/:productId", (req, res) => {
  const updateProduct =  Product.updateOne(
    { _id: req.params.productId },
    {
      $set: {
        title: req.body.title,
        inventory: req.body.inventory,
        description: req.body.description,
        category: req.body.category
      }
    }
  )
    .then(doc => {
      res.status(200).json(doc);
    })
    .catch(err => {
      res.json({ message: err });
    });
});

//Delete product
router.delete("/:productId", (req, res) => {
  const removeProduct =  Product.deleteOne({
    _id: req.params.productId
  })
    .then(doc => {
      res.status(200).json(doc);
    })
    .catch(err => {
      res.json({ message: err });
    });
});

module.exports = router;
