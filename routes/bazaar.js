const express = require("express");

const productsController = require("../controllers/products")

const router = express.Router();

router.get("/", productsController.getIndex);
router.get('/products', productsController.getProducts);
router.get('/cart', productsController.getCart);
router.get('/orders', productsController.getOrders);

module.exports = router;
