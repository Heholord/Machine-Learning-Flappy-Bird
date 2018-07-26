const fs = require('fs');
var endOfLine = require('os').EOL;
var express = require('express')
var app = express()

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  let decodeString = Buffer.from(req.query.log, 'base64');
  fs.appendFile('consoleLog.txt', (decodeString + endOfLine), function (err) {
    if (err) throw err;
  });
  console.log(req.query.log + " translated to: " + decodeString)
  res.send("ok");
})


app.listen(3000)
