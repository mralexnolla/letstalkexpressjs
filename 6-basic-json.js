const express = require("express");
const { products } = require("./data");

const app = express();

app.get("/", (req, res) => {
  res.json([
    {
      title: "This is an Express series",
      name: {
        title: "Senior",
        fname: "Selasi",
        lname: "Dom",
      },
    },
  ]);
});

app.get("/about", (req, res) => {
  res.json(products);
});

app.listen(3000, () => {
  console.log("Server litening to port 3000");
});
