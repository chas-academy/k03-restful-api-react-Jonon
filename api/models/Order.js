const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
    product: {type: mongoose.Schema.Types.ObjectId, ref: 'Product'},
    date: {type: Date, required: true},
    orderNumber: {type: Number, required: true},
    orderStatus: {type: String, required: true},
    total: {type: Number, required: true},
    quantity: {type: Number, required: true},
})

module.exports = mongoose.model("Order", orderSchema);
