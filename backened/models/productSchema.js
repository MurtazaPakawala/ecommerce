const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please enter the name of the product"],
  },
  description: {
    type: String,
    required: [true, "please enter the description of the product"],
  },
  description: {
    type: Number,
    required: [true, "please enter the price of the product"],
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
});

module.exports = mongoose.model("Product", productSchema);
