//TODO------IMPORT MODULES--------
const express = require("express");
let db = require("../db");
const app = express.Router();
//*TABLE PRIORITE (security)

//TODO------CREATE METHOD(POST)--------
app.delete("/", function (req, res) {
  let selectionPriorite =
    "DELETE FROM `MOVIES` WHERE `MOVIES`.`category_id` =?";
  let del = [req.body.category_id];
  db.query(selectionPriorite, del, (err, rows, fields) => {
    if (err) {
      res.send(err.message);
    } else {
      res.send(rows);
    }
  });
});

module.exports = app;
