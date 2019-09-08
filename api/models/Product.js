const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    
    title: String,
    poster: String,
    description: String,
    writer: String,
    artist: String,
    coverArtist: String,
    publisher: String,
    publicationDate: { type: Date, default: Date.now },
    pages: Number,
    price: Number,
    inventory: Number
})

module.exports = mongoose.model('Product', productSchema)