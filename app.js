var express = require('express');
var app = express.createServer();

app.get('/slappy', function(req, res){
    res.send('Well Hello there');
});

if (!module.parent) {
  app.listen(3030);
  console.log("Express server listening on port %d", app.address().port);
}