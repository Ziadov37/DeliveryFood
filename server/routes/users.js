const router = require('express').Router();
// const User = require('../model/User');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
require("dotenv").config();

// router.post('/register/user', async(req, res)=> {
// // Check if the user email already exist
//     const emailExist = await User.findOne({ email:req.body.email})
//     if(emailExist) return res.status(400).send('Email already exist');

// // Hah password
//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(req.body.password, salt);


// // Create new User
//     const user = new User({
//         fullname:req.body.fullname,
//         email:req.body.email,
//         password:hashedPassword
//     });
    
//     try{
//         const savedUser = await user.save();
//         res.send({user: user._id});
//     }catch(err){
//         res.status(400).send(err);
//     }
// });

// // Login
// router.post('/login', async(req,res)=>{
// // Check if the email already exist
//     const user = await User.findOne({ email:req.body.email})
//     if(!user) return res.status(400).send('Email or password is wrong ');


// // Check if the password is correct
//     const validPass = await bcrypt.compare(req.body.password, user.password);
//     if(!validPass) return res.status(400).send('Email or password is wrong ');

// // Create and assign a token
//     const token = jwt.sign({_id:user._id},process.env.TOKEN_SECRET);
//     res.header('auth-token', token).send(token);



// });



// Brign in the user Registration function
const {userRegister, userlogin} = require("../utils/auth"); 


// User Registeration Route
router.post("/register_user", async(req,res)=>{
    await userRegister(req.body, 'user', res);
});

// Manager Registeration Route
router.post("/register_manager", async(req,res)=>{
    await userRegister(req.body, 'manager', res);

});

// Admin Login Route
router.post("/login_admin", async(req,res)=>{
    await userlogin(req.body, 'admin', res);
});

// User Login Route
router.post("/login_user", async(req,res)=>{
    await userlogin(req.body, 'user', res);

});

// Manager Login Route
router.post("/login_manager", async(req,res)=>{
    await userlogin(req.body, 'manager', res);

});

module.exports = router;

