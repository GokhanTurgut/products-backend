const Product = require("../models/product");

exports.getAddProducts = (req, res) => {
  res.render("admin/add-product", { pageTitle: "Add Product" });
};

exports.postAddProducts = (req, res) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product(title, imageUrl, price, description);
  product.save();
  res.redirect("/");
};

exports.getEditProducts = (req, res) => {
  res.render('admin/edit-product', { pageTitle: "Edit Product" });
}

exports.getIndex = (req, res) => {
  Product.fetchAll().then((products) => {
    res.render("bazaar/index", { pageTitle: "Bazaar", products: products });
  });
};

exports.getProducts = (req, res) => {
  Product.fetchAll().then((products) => {
    res.render("bazaar/products", {
      pageTitle: "Products",
      products: products,
    });
  });
};

exports.getCart = (req, res) => {
  res.render("bazaar/cart", { pageTitle: "My Cart" });
};

exports.getOrders = (req, res) => {
  res.render("bazaar/orders", { pageTitle: "Orders" });
};
