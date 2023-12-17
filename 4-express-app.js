const express = require("express");
const path = require("path");

const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "index.html"));
});

app.get("/about", (req, res) => {
  res.send("<h1>About</h1>");
});

app.all("*", (req, res) => {
  res.status(404).send("This page does not exist");
});

app.listen(3000, () => {
  console.log("app is listening to port 3000");
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
