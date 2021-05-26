const { json } = require("body-parser");
const https = require("https");
const req_modules = require("./modules/req_modules");
var res_data;

exports.getProducts = function (cid) {
  return new Promise(function (resolve, reject) {
    const request = https.get(
      req_modules.req_get("/api/prds/" + cid),
      (res) => {
        res.on("data", (d) => {
          res_data = JSON.parse(d).data;
          // price formatting
          for (var i = 0; i < res_data.length; i++) {
            res_data[i].sales_price = res_data[i].sales_price.format();
          }
          resolve(res_data);
        });
        res.on("error", (e) => {
          reject(e);
        });
      }
    );
    request.on("error", (e) => {
      reject(e);
    });
    request.end();
  });
};
