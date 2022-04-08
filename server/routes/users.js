const router = require('express').Router();
require("dotenv").config();

// Brign in the user Registration function
const {userRegister, userlogin} = require("../controller/authController"); 


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

