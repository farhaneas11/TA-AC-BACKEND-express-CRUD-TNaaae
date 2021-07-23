var express = require('express');
var router = express.Router();

var user = require('../models/user')

//book routes
router.get('/new' , (req,res)=>{
    //to create user form for adding values
    res.render('adduser');
})

router.post('/',(req,res ,next)=>{
    //create a user by addding the details
    console.log(req.body);
    user.create(req.body , (err,createuser)=>{
        if(err) return next(err);
        res.redirect('/user')
    })

})

router.get('/',(req,res)=>{
    //list all the user
    res.render('user');
})

router.get('/:id',(req,res)=>{
    //get user by id
})

router.get('/index',(req,res)=>{
    res.locals.message = "hello world";
    res.render('school');
})

module.exports = router;