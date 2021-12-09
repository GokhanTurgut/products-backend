const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.render('market', {pageTitle: 'Market'})
});

module.exports = router;
