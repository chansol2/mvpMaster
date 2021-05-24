const express = require("express");
const path = require("path");

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(__dirname + "/public"));

app.get("/", function (req,res) {
  res.render("index")
});

app.listen(8080, function() {
  console.log("server is running at port 8080")
})
