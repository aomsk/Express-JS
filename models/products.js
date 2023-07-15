const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  p_name: {
    requried: true,
    type: String,
  },
  p_desc: String,
  p_price: {
    requried: true,
    type: Number,
  },
  p_amount: {
    requried: true,
    type: Number,
  },
});

module.exports = mongoose.model("products", productSchema);
