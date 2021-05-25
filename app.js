const express = require("express");
const path = require("path");
const https = require("https");
const req_modules = require("./modules/req_modules");
const priceFormat = require("./modules/price-format.js");
const API_rcmd = require("./rcmd.js");

const app = express();

var spl_1, spl_2, spl_3;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(__dirname + "/public"));

app.get("/", async function (req, res) {
  spl_1 = await API_rcmd.rcmd_1();
  spl_2 = await API_rcmd.rcmd_2();
  spl_3 = await API_rcmd.rcmd_3();

  res.render("index", {
    spl_1: spl_1,
    spl_2: spl_2,
    spl_3: spl_3,
  });
});

app.listen(8080, function () {
  console.log("server is running at port 8080");
});
