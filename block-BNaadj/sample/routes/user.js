var express = require('express');
var router = express.Router();

//var ejs = require('ejs');
var user = require('../models/user');

//Diary routes

///user/ user.ejs , Shows the total of users in the database
router.get('/',(req,res,next)=>{
    //list users
    user.find({},(err ,users)=>{
        console.log(err,users);
        if(err) return next(err);
        res.render('user',{users:users});
    })
});

//Create new , newUser.ejs
router.get('/new',(req,res)=>{
    res.render('newUser');
});

//Post user info in /user/ , user.ejs
router.post('/',(req,res,next)=>{
    console.log(req.body);
    user.create(req.body , (err,users)=>{
        if(err) return next(err)
        res.redirect('user');
    })
});

//Find users by id
router.get('/:id',(req,res,next)=>{
    var id = req.params.id;
    user.findById(id,(err,users)=>{
        console.log(err,users);
        if(err) return next(err)
        res.render('userDetails' , {users :users})
    })
});

//edit user by id
router.get('/:id/edit' ,(req,res,next)=>{
    var id = req.params.id;
    user.findById(id,(err,users)=>{
        console.log(users);
        if(err) return next(err)
        res.render('editUser',{users:users})
    })
});

router.post('/:id',(req,res ,next)=>{
    //get user by id
    var id = req.params.id;
    user.findByIdAndUpdate(id,req.body,(err,users)=>{
        //console.log(user);
        if(err) return next(err);
        res.redirect("/user/" + id)
    })
});

router.delete('/:id/delete',(req,res,next)=>{
    var id = req.params.id;
    user.findByIdAndDelete(id,(err,users)=>{
        if(err) return next(err)
        res.redirect('/user')
    })
});

module.exports = router ; 

