const express = require("express");
const { products } = require("./data");
const logger = require("./logger");
const authorize = require("./authorize");

const app = express();

// req => middleware => res

app.use(logger);

app.get("/", (req, res) => {
  res.send("Home");
});
app.get("/about", (req, res) => {
  res.send("About");
});
app.get("/api/products", authorize, (req, res) => {
  res.send("Products");
});
app.get("/api/items", (req, res) => {
  res.send("Items");
});

app.listen(3000, () => {
  console.log("Server litening to port 3000");
});
