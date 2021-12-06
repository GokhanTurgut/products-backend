const path = require("path");

const express = require("express");

const adminData = require("./admin");

const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "index.html"));
  console.log(adminData.products);
});

module.exports = router;
