//TODO------IMPORT MODULES--------
const express = require("express");
let db = require("../db");
const app = express.Router();

//TODO------CREATE METHOD(POST)--------
app.post("/", function (req, res) {
  let selectionPriorite = "INSERT INTO MOVIES SET ?";
  let post = {
    title: req.body.title,
    description: req.body.description,
    category_id: req.body.category_id,
    images: req.body.images,
    releaseYear: req.body.releaseYear,
  };
  db.query(selectionPriorite, post, (err, rows, fields) => {
    if (err) {
      res.send(err.message);
    } else {
      res.end("Team has been created!");
    }
  });
});

module.exports = app;
