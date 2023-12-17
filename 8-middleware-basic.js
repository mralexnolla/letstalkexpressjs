const express = require("express");
const { products } = require("./data");

const app = express();

// req => middleware => res



app.get("/", potato, (req, res) => {
  res.send("Home");
});
app.get("/about", potato, (req, res) => {
  res.send("About");
});

app.listen(3000, () => {
  console.log("Server litening to port 3000");
});
