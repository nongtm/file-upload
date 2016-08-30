var express = require('express');
var app = express();

var multer  = require('multer')
var upload = multer({ dest: './uploads/' })

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.post('/', upload.single('up-file'), function (req, res) {
  if (req.file) {
    res.send('The size of your file is: ' + req.file.size +'bytes');
  }
  else
  res.send('Missing file!');
})

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});


