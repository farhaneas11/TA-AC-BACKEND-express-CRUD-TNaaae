var express = require('express');
var app = express();

var ejs = require('ejs');
var path = require('path');
var mongoose = require('mongoose');


app.use(express.json());

mongoose.connect("mongodb://localhost/sample" ,{useNewUrlParser : true}, (err)=>{
    console.log(err ? err : "conneted to database");
});

//routing middlewares
app.use('/',require('./routes/route'));
app.use('/student',require('./routes/books'));

app.set("view engine" , "ejs");
app.set("views" , path.join(__dirname , "views"));


app.use((req,res,next)=>{
    res.send('page not found');
})
app.listen(4000 , ()=>{
    console.log("server is open");
})




/* routers
app.get('/',(req,res)=>{
    var list = ["ankit", "suraj", "prashant", "ravi"];
    res.render('students' , {list : list});
})
*//*
app.get('/about',(req,res)=>{
    res.render('about');
})
*/
/*
//book routes
app.get('/students/new' , (req,res)=>{
    //to create student form for adding values
})

app.post('/students',(req,res)=>{
    //create a student by addding the details
})

app.get('/students',(req,res)=>{
    //list all the students
})

app.get('/students/:id',(req,res)=>{
    //get student by id
})

app.get('/index',(req,res)=>{
    res.locals.message = "hello world";
    res.render('school');
})
*/