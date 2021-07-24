var express = require('express');
var app = express();

var ejs = require('ejs');
var path = require('path');
var mongoose = require('mongoose');

var indexroute = require('./routes/index');
var userrouter = require('./routes/user');

app.use(express.json());

mongoose.connect("mongodb://localhost/user" ,
    {useNewUrlParser : true , useUnifiedTopology:true}, (err)=>{
        console.log("conneted to database",err ? false : true);
});

app.set("view engine" , "ejs");
app.set("views" , path.join(__dirname , "views"));

//capture form data
app.use(express.urlencoded({extended : false}));

//static static direectory
app.use(express.static(path.join(__dirname , "public")));

//routing middlewares
app.use('/',indexroute);
app.use('/user',userrouter);

//Error handler
app.use((req,res,next)=>{
    res.send('page not found');
})

//custom error handler
app.use((err,req,res,next)=>{    
    res.send(err);
})

app.listen(4000 , ()=>{
    console.log("server is open");
})

