const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
  title: String,
  subcategories: [{
    title: {type: String}
}]
});

module.exports = mongoose.model("Category", categorySchema);
