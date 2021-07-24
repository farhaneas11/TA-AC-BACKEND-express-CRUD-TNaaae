var express = require('express');
var app = express();
var ejs = require('ejs');
var mongoose = require('mongoose');


app.use(express.json());

mongoose.connect("mongodb://localhost/sample" ,{useNewUrlParser : true}, (err)=>{
    console.log(err ? err : "conneted to database");
});



app.set("view engine" , "ejs");
app.set("site" , path.join(__dirname , "site"));

app.get('/',(req,res)=>{
    res.render('school');
})

app.get('/index',(req,res)=>{
    res.locals.message = "hello world";
    res.render('school');
})



app.use((req,res,next)=>{
    res.send('page not found');
})
app.listen(4000 , ()=>{
    console.log("server is open");
})