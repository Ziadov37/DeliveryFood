const router = require('express').Router();
const User = require('../model/User');
const bycrypt = require('bycrypt');

router.post('/register', async(req, res)=> {

// Check if the user email already exist
    const emailExist = await User.findOne({ email:req.body.email})
    if(emailExist) return res.status(400).send('Email already exist');

// Hah password
    const salt = await bcypt.gentSalt(10);

// Create new User
    const user = new User({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,

    });
    
    try{
        const savedUser = await user.save();
        res.send(savedUser);
    }catch(err){
        res.status(400).send(err);
    }
});

module.exports = router;