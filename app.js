var express = require('express');
var app = express();

app.configure(function(){
    app.set('view engine', 'hbs');

});



app.use("/css",express.static(__dirname+'/public/css'));
app.use("/js",express.static(__dirname+'/public/js'));
app.use("/img",express.static(__dirname+'/public/img'));

app.get('/', function(req, res){
  res.render('index.hbs',{
  	'title':'UnJumble',
  	'description':'desc',
  	'version':'Version 0.0.9'
  });
});

app.listen(3000);