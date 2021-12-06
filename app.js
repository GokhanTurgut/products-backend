const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const indexRoute = require("./routes/index");
const adminData = require("./routes/admin");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(indexRoute);
app.use(adminData.routes);

app.use((req, res) => {
  res.sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(3000);
