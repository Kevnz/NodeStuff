var app = express.createServer();

app.get('/', function(req, res){
    res.send('Well Hello there');
});

app.listen(3000);