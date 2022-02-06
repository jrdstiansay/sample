const path = require("path");
const express = require("express");
const { engine } = require("express-handlebars");

const app = express();

const publicDirectoryPath = path.join(__dirname, "../public");

app.engine("handlebars", engine());

app.set("view engine", "handlebars");
app.set("views", "./views");

app.use(express.static(publicDirectoryPath));

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(5000, () => {
  console.log("Server running");
});
