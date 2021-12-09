const express = require("express");

const productsController = require('../controllers/products');

const router = express.Router();

const products = [];

router.get("/add-product", productsController.getAddProducts);

router.post("/add-product", productsController.postAddProducts);

exports.routes = router;
exports.products = products;
