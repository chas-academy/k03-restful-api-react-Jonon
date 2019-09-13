const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
  title: String,
  subcategories: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Subcategory"
    }
  ]
});

module.exports = mongoose.model("Category", categorySchema);
