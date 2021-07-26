var express = require('express');
var app = express();

var ejs = require('ejs');
var path = require('path');
var mongoose = require('mongoose');

var indexRoute = require('./routes/index');
var userRoute = require('./routes/user');

app.use(express.json());


mongoose.connect("mongodb://localhost/sample" ,
    {useNewUrlParser : true , useUnifiedTopology:true ,useCreateIndex: true}, (err)=>{
        console.log("conneted",err ? false : true);
});

app.set("view engine" , "ejs");
app.set("views" , path.join(__dirname , "views"));


//capture form data
app.use(express.urlencoded({extended : false}));

//static static direectory
app.use(express.static(path.join(__dirname , "public")));

//routing middlewares
app.use('/',indexRoute);
app.use('/user',userRoute);

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