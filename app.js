const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {

  var n1 = parseInt(req.body.n1);
  var n2 = parseInt(req.body.n2);

  switch(req.body.op)
  {
    case 'Add' :
      var result = Number(n1 + n2);
      res.send("<h1 style='text-align:center; padding-top:17rem; color:red;'>Your Answer is - </h1>" +
      "<h1 style='text-align:center; color:purple;'>" + result +"</h1>");
      break;
    case 'Sub' :
      var result = Number(n1 - n2);
      res.send("<h1 style='text-align:center; padding-top:17rem; color:red;'>Your Answer is - </h1>" +
      "<h1 style='text-align:center; color:purple;'>" + result +"</h1>");
      break;
    case 'Mul' :
      var result = Number(n1 * n2);
      res.send("<h1 style='text-align:center; padding-top:17rem; color:red;'>Your Answer is - </h1>" +
      "<h1 style='text-align:center; color:purple;'>" + result +"</h1>");
      break;
    case 'Div' :
      var result = Number(n1 / n2);
      res.send("<h1 style='text-align:center; padding-top:17rem; color:red;'>Your Answer is - </h1>" +
      "<h1 style='text-align:center; color:purple;'>" + result +"</h1>");
      break;
    default :
    res.send("<h1 style='text-align:center; padding-top:17rem; color:red;'>You Have Error ! Either You Have Entered wrong operator or other symbol !!!</h1>");
  }
});

app.listen(3000, function(req, res) {
  console.log("Server started on port 3000");
});
