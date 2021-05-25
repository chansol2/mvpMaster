const { json } = require("body-parser");
const https = require("https");
const req_modules = require("./modules/req_modules");
var res_data_1, res_data_2, res_data_3;

// bed_rcmd
exports.rcmd_1 = function () {
  return new Promise(function (resolve, reject) {
    const request = https.get(req_modules.req_get("/api/rcmd/1"), (res) => {
      res.on("data", (d) => {
        res_data_1 = JSON.parse(d).data;
        // price formatting
        for (var i = 0; i < res_data_1.length; i++) {
          res_data_1[i].sales_price = res_data_1[i].sales_price.format();
        }
        resolve(res_data_1);
      });
      res.on("error", (e) => {
        reject(e);
      });
    });
    request.on("error", (e) => {
      reject(e);
    });
    request.end();
  });
};

// living_rcmd
exports.rcmd_2 = function () {
  return new Promise(function (resolve, reject) {
    const request = https.get(req_modules.req_get("/api/rcmd/2"), (res) => {
      res.on("data", (d) => {
        res_data_2 = JSON.parse(d).data;
        // price formatting
        for (var i = 0; i < res_data_2.length; i++) {
          res_data_2[i].sales_price = res_data_2[i].sales_price.format();
        }
        resolve(res_data_2);
      });
      res.on("error", (e) => {
        reject(e);
      });
    });
    request.on("error", (e) => {
      reject(e);
    });
    request.end();
  });
};

// storage_rcmd
exports.rcmd_3 = function () {
  return new Promise(function (resolve, reject) {
    const request = https.get(req_modules.req_get("/api/rcmd/3"), (res) => {
      res.on("data", (d) => {
        res_data_3 = JSON.parse(d).data;
        // price formatting
        for (var i = 0; i < res_data_3.length; i++) {
          res_data_3[i].sales_price = res_data_3[i].sales_price.format();
        }
        resolve(res_data_3);
      });
      res.on("error", (e) => {
        reject(e);
      });
    });
    request.on("error", (e) => {
      reject(e);
    });
    request.end();
  });
};
