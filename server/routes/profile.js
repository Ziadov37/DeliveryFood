const router = require('express').Router();
const User = require('../model/User');
const verify = require('../middleware/verifyToken');

router.get('/profile',verify,(req,res)=> {
    res.send(req.user);
    User.findOne({_id:req.user})
})

module.exports= router;