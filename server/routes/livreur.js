const router = require('express').Router();
require("dotenv").config();

// Brign in the livreur Registration function
const {livreurRegister, livreurlogin} = require("../utils/livreurController"); 

// livreur Registeration Route
router.post("/register_livreur", async(req,res)=>{
    await livreurRegister(req.body, 'livreur', res);
});

// livreur Login Route
router.post("/login_livreur", async(req,res)=>{
    await livreurlogin(req.body, 'livreur', res);

});

module.exports = router;