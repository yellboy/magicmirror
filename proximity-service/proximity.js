var express = require('express');
var app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', function (req, res) {
   res.send('Hello World');
});

var lastProximity = 5;

app.get('/proximity', function(req, res) {
   if (lastProximity === 5) {
       lastProximity = 15;
   } else {
       lastProximity = 5;
   }
   
   res.send('' + lastProximity);
});

var server = app.listen(8888, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
});