const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true
  },
  product: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true
    }
  ],
  date: {
    type: Date,
    default: Date()
  },
  orderNumber: {
    type: mongoose.Schema.ObjectId,
    required: true
  },
  orderStatus: {
    type: String,
    default: "Pending",
    required: true
  },
  total: {
    type: Number,
    required: true
  },
  quantity: {
    type: Number,
    required: true,
    default: 1
  }
});

module.exports = mongoose.model("Order", orderSchema);
