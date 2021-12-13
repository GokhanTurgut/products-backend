const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");

const bazaarRoute = require("./routes/bazaar");
const adminRoute = require("./routes/admin");
const errorController = require('./controllers/error');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(bazaarRoute);
app.use('/admin', adminRoute);

app.use(errorController.get404);

app.listen(3000);
