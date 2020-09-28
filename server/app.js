//TODO------IMPORT MODULES--------
const express = require("express");
const app = express();
const cors = require("cors");
const mysqlApostrophe = require("mysql-apostrophe");
const bodyParser = require("body-parser");

//TODO------IMPORT ROUTES--------
const getSeries = require("./Routes/series");
const getMovies = require("./Routes/movies");
const del = require("./Routes/delete");
const createmovies = require("./Routes/create");

//TODO------CREATE SERVER--------
var server = app.listen(3000, "127.0.0.1", function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("App listening at http://%s:%s", host, port);
});

//TODO------MIDDLEWARES--------
app.use(bodyParser.json());
app.use("/series", getSeries);
app.use("/movies", getMovies);
app.use("/createmovies", createmovies);
app.use("/del", del);

app.use(mysqlApostrophe);
app.use(cors());

//TODO------PORT LISTENING TO--------
app.listen(3002);
