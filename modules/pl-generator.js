module.exports.pl_get = function (spl) {
  let orgList = spl;
  let rst = [];
  if (spl.length < 8) {
    rst.push([spl]);
    return rst;
  } else {
    while (8 <= orgList.length) {
      let temp = [];
      for (var i = 0; i < 8; i++) {
        temp.push(orgList[i]);
      }
      rst.push(temp);
      orgList = orgList.slice(8, orgList.length);
      //   console.log(orgList.length);
    }
    if (orgList.length === 0) {
      return rst;
    } else {
      var last = orgList;
      rst.push(last);
      return rst;
    }
  }
};
