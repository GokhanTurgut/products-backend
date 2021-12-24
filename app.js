const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const app = express();

dotenv.config();

app.set("view engine", "ejs");

const bazaarRoute = require("./routes/bazaar");
const adminRoute = require("./routes/admin");
const errorController = require("./controllers/error");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(bazaarRoute);
app.use("/admin", adminRoute);

app.use(errorController.get404);

mongoose
  .connect(process.env.MongoDB_URL)
  .then(() => {
    app.listen(process.env.PORT);
  })
  .catch((err) => {
    console.log(err);
  });
