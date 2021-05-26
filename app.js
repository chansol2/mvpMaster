const express = require("express");
const path = require("path");
const https = require("https");
const req_modules = require("./modules/req_modules");
const priceFormat = require("./modules/price-format.js");
const API_rcmd = require("./rcmd.js");
const API_prds = require("./productList.js");

const app = express();

var spl_1, spl_2, spl_3, spl, cid, o_url;

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

app.get("/product/:cid", async function (req, res) {
  cid = req.params.cid;
  if (cid.length == 3) {
    console.log(__dirname);
    spl = await API_prds.getProducts("10101");
    res.render("products/product-medium", {
      spl: spl,
    });
  } else if (cid.length == 5) {
    console.log(__dirname);
    spl = await API_prds.getProducts("10101");
    res.render("products/product-small", {
      spl: spl,
    });
  } else {
    res.redirect("/");
  }
});

app.get("/product/:cid/detail", function (req, res) {
  o_url = req.query.o_url;
  res.render("products/product-detail", {
    o_url: o_url,
  });
});

app.listen(8080, function () {
  console.log("server is running at port 8080");
});
