var express = require('express');
var router = express.Router();

//book routes
router.get('/new' , (req,res)=>{
    //to create student form for adding values
    res.send('Book form');
})

router.post('/',(req,res)=>{
    //create a student by addding the details
})

router.get('/',(req,res)=>{
    //list all the students
})

router.get('/:id',(req,res)=>{
    //get student by id
})

router.get('/index',(req,res)=>{
    res.locals.message = "hello world";
    res.render('school');
})

module.exports = router;