const express = require("express");
const path = require("path");
const https = require("https");
const req_modules = require("./modules/req_modules");
const priceFormat = require("./modules/price-format.js");
const API_rcmd = require("./rcmd.js");
const API_prds = require("./productList.js");
const map = require("./modules/map.js");

const app = express();

var spl_1, spl_2, spl_3, spl, cid, o_url, curr_sort, largeC, medC, smallC;

let sort_options = ["인기순", "리뷰순", "평점순", "가격낮은순", "가격높은순"];

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
  curr_sort = Number(req.query.sort);
  if (cid.length == 3 || cid.length == 4) {
    console.log(__dirname);
    if (cid.length === 3) {
      largeC = map.large[cid.substring(0, 1)];
    } else {
      largeC = map.large[cid.substring(0, 2)];
    }

    medC = map.med[cid];

    spl = await API_prds.getProducts("10101");
    res.render("products/product-medium", {
      spl: spl,
      sort_options: sort_options,
      curr_sort: curr_sort,
      largeC: largeC,
      medC: medC,
    });
  } else if (cid.length == 5) {
    console.log(__dirname);
    spl = await API_prds.getProducts("10101");

    medKey = cid.substring(0, 3);

    res.render("products/product-small", {
      spl: spl,
      sort_options: sort_options,
      curr_sort: curr_sort,
      largeC: map.large[cid.substring(0, 1)],
      medC: map.med[medKey],
      medKey: medKey,
      smallC: map.small[cid],
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
