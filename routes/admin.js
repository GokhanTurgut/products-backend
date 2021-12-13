const express = require("express");

const productsController = require("../controllers/products");

const router = express.Router();

router.get("/add-product", productsController.getAddProducts);

router.post("/add-product", productsController.postAddProducts);

router.get("/edit-product", productsController.getEditProducts);

module.exports = router;
