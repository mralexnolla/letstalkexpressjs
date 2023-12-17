const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("my Home page");
});

app.get("/about", (req, res) => {
  res.send("My About page");
});

app.all("*", (req, res) => {
  res.status(404).send("<h1>This page does not exist</h1>");
});

app.listen(3000, () => {
  console.log("server is listening to port 3000");
});

//console.log(express)
// the first 4 are http verbs
//app.get
//app.post
//app.put
//app.delete
//-------
//app.all
//app.use
//app.listen
