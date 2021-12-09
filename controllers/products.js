const Product = require("../models/product");

exports.getAddProducts = (req, res) => {
  res.render("add-product", { pageTitle: "Add Product" });
};

exports.postAddProducts = (req, res) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect("/");
};

exports.getMarket = (req, res) => {
  Product.fetchAll().then((products) => {
    res.render("market", { pageTitle: "Market", products: products });
  });
};
