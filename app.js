const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(morgan("common"));

const books = require("./books-data.js");

app.get("/books", (req, res) => {
  res.json(books);
});

app.listen(8000, () => {
  console.log("Express server is listening on port 8000!");
});
