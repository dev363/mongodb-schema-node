var express = require('express');
var routes = require('routes');
var http = require('http');
var url = require('url');
var path = require('path');
var bodyparser = require('body-parser');
//var  aa=body.urlencoded({extended: false}); 


var  cors=require('cors');




var db=require('./config/database');

//import hb from "./config/handlebars"
//import users from "./routes/users"
var users=require('./routes/users');

const app = express();

//set template engine
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');


//make way for some custom css, js and images
app.use('/custom/css', express.static(__dirname + '/views/static/css'));
app.use('/custom/js', express.static(__dirname + '/views/static/js'));
app.use('/custom/imgs', express.static(__dirname + '/views/static/imgs'));

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));

app.use("/users", users);

//Home route
app.get('/', (req, res) => {
    res.render('home');
});


app.use("/users/list",(req,res)=>
	{
		
	
	});
	//app.use("/user/list");













module.exports = app;