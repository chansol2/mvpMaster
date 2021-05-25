// nineso Server
const url = "nineso.co.kr";

var req_set = "";

module.exports.req_get = function (rurl) {
  req_set = {
    hostname: url,
    path: rurl,
    headers: {
      "Content-Type": "application/json",
    },
    method: "GET",
  };
  return req_set;
};
