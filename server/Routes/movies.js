//TODO------IMPORT MODULES--------
const express = require("express");
let db = require("../db");
const app = express.Router();
//*TABLE PRIORITE (security)

//TODO------CREATE METHOD(POST)--------
app.get("/", function (req, res) {
  let selectionPriorite = "SELECT * FROM MOVIES ";
  db.query(selectionPriorite, (err, rows, fields) => {
    if (err) {
      res.send(err.message);
    } else {
      res.send(rows);
    }
  });
});

module.exports = app;
