const express = require("express");
const { products } = require("./data");

const app = express();

app.get("/", (req, res) => {
  res.send('<h1>Home page</h1> <a href="/api/product">product</a>');
});

app.get("/api/product", (req, res) => {
  const newProduct = products.map(({ id, name, image }) => ({
    id,
    name,
    image,
  }));
  res.json(newProduct);
});

app.get("/api/product/:productId", (req, res) => {
  const { productId } = req.params;
  const singleProduct = products.find(
    (product) => product.id === Number(productId)
  );
  if (!singleProduct) {
    res.status(404).send("Page does not exist");
  }
  res.json(singleProduct);
});

app.get("/api/product/:firstparam/something/:secondparam", (req, res) => {
  console.log(req.params);
  res.send("Hello world");
});

app.get("/api/product/v1/query", (req, res) => {
  //console.log(req.query)
  const { search, limit } = req.query;
  let sortedProducts = [...products];

  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search);
    });
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }

  if (sortedProducts < 1) {
    //res.status(200).send("no product match")
    return res.status(200).json({ success: true, data: [] });
  }

  res.status(200).json(sortedProducts);
});

app.listen(3000, () => {
  console.log("Server litening to port 3000");
});

//   const id = product.id;
//   const name = product.name;
//   const image = product.image

// const {id, name, image} = product
//  return {id, name, image}
