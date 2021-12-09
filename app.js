const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");

const marketRoute = require("./routes/market");
const adminData = require("./routes/admin");
const errorController = require('./controllers/error');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(marketRoute);
app.use(adminData.routes);

app.use(errorController.get404);

app.listen(3000);
