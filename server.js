var express = require("express");
const app = express();
var fs = require("fs");
var multer  = require('multer')
var upload = multer()


app.use(express.static('public'));
app.get("/", function(req, res) {
    res.setHeader('Content-Type', 'text/html');
    fs.readFile("./index.html", function(err, html){
        if (err) throw err;
        res.write(html);
        res.end();
    });
});

app.get("*", function (req, res){
    res.setHeader('Content-Type', 'text/plain');
    res.end("lala");
});

var type = upload.single('fileToUpload');
app.post('/up', type, function (req, res) {
  res.end("{'File Size': '"+req.file.size+" bytes'}");
})
app.listen(process.env.PORT);