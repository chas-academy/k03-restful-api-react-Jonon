const mongoose = require('mongoose');

const subcategorySchema = mongoose.Schema({
    title: String
})

module.exports = mongoose.model("Subcategory", subcategorySchema)