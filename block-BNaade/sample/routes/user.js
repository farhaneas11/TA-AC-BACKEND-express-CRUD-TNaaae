var express = require('express');
var router = express.Router();
var ejs = require('ejs')
var user = require('../models/user')

//book routes
router.get('/',(req,res,next)=>{
    //list all the user
    user.find({},(err,users)=>{
        //console.log(err,users);
        if(err) return next(err);
        res.render('user',{users :users});
    })
})


router.get('/new' , (req,res)=>{
    //to create user form for adding values
    res.render('adduser');
})

router.post('/',(req,res ,next)=>{
    //create a user by addding the details
    console.log(req.body);
    user.create(req.body , (err,createuser)=>{
        if(err) return next(err);
        res.redirect('user')
    })

});

router.get('/:id',(req,res ,next)=>{
    //get user by id
    var id = req.params.id;
    user.findById(id,(err,userid)=>{
        console.log(user);
        if(err) return next(err);
        res.render('userdetails' , {userid : userid})
    })
});

router.get('/:id/edit',(req,res)=>{
    //get user by id in edit 
    var id = req.params.id;
    user.findById(id,(err,userid)=>{
        console.log(user);
        if(err) return next(err);
        res.render('edituser' , {userid : userid})
    })
});
router.post('/:id',(req,res ,next)=>{
    //get user by id
    var id = req.params.id;
    user.findByIdAndUpdate(id,req.body,(err,userid)=>{
        //console.log(user);
        if(err) return next(err);
        res.redirect("/user/" + id)
    })
});

module.exports = router;