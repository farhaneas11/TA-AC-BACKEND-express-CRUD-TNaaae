var express = require('express');
var router = express.Router();

router.get('/',(req,res)=>{
    var list = ["ankit", "suraj", "prashant", "ravi"];
    res.render('students' , {list : list});
});

router.get('/about',(req,res)=>{
    res.render('about');
})

module.exports = router;