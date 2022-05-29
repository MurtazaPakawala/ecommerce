const Product = require("../models/productSchema");

//create product
exports.createProduct = async (req, res, next) => {
  const product = await Product.create(req.body);
  res.status(201).json({
    sucess: true,
    product,
  });
};
//getting all the products
exports.getAllProducts = async (req, res) => {
  const products = await Product.find();
  res.status(200).json({ message: "the route is working fine", products });
};
