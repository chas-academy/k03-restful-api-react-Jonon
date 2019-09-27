const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  title: { type: String, required: true },
  poster: { type: String, required: true },
  description: { type: String, required: true },
  writer: { type: String, required: true },
  artist: { type: String, required: true },
  coverArtist: { type: String, required: true },
  publisher: { type: String, required: true },
  publicationDate: { type: Date, default: Date.now },
  pages: { type: Number, required: true },
  price: { type: Number, required: true },
  inventory: { type: Number, required: true, default: 0  },
  category: [String],
  series: {type: String}
});

module.exports = mongoose.model("Product", productSchema);
