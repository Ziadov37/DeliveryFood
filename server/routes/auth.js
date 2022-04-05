const router = require('express').Router();
const User = require('../model/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require("dotenv").config();
router.post('/register', async(req, res)=> {

// Check if the user email already exist
    const emailExist = await User.findOne({ email:req.body.email})
    if(emailExist) return res.status(400).send('Email already exist');

// Hah password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);


// Create new User
    const user = new User({
        name:req.body.name,
        email:req.body.email,
        password:hashedPassword
    });
    
    try{
        const savedUser = await user.save();
        res.send({user: user._id});
    }catch(err){
        res.status(400).send(err);
    }
});

// Login
router.post('/login', async(req,res)=>{
// Check if the email already exist
    const user = await User.findOne({ email:req.body.email})
    if(!user) return res.status(400).send('Email or password is wrong ');


// Check if the password is correct
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if(!validPass) return res.status(400).send('Email or password is wrong ');

// Create and assign a token
    const token = jwt.sign({_id:user._id},process.env.TOKEN_SECRET);
    res.header('auth-token', token).send(token);



});

module.exports = router;