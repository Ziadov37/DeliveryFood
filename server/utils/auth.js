const bcrypt = require("bcryptjs");
const User = require("../model/User");
const jwt = require("jsonwebtoken");
const {SECRET} = require('../config/config');

 /**
  * @DESC to register the user (ADMIN,USER,MANAGER)
  */
 const userRegister = async(userDets,role,res)=>{
     try{
        // Validate the Username
        let usernameNotTaken = await validateUsername(userDets.username);
        if(!usernameNotTaken){
            return res.status(400).json({
                message : "Username is already taken",
                success: false
            });
        }
        // Validate the email
        let emailNotRegistred = await validateEmail(userDets.email);
        if(!emailNotRegistred){
            return res.status(400).json({
                message : "Email is already taken",
                success: false
            });
        }
        // Get the hashed Password
        const password = await bcrypt.hash(userDets.password, 12);
        // Create new User
        const newUser = new User({
            ...userDets,
            password,
            role
        });
        await newUser.save();
        return res.status(201).json({
            message : "Registred Done",
            success: true
        })
     }catch(err){
        return res.status(500).json({
            message : "Unable to create u're account",
            success : false
        })
     }
 };

 const userlogin = async (userCreds, role, res) => {
    let {username, password} = userCreds;
    // First check username in the database
    const user = await User.findOne({username});
    if(!user){
        return res.status(404).json({
            message : "Username is not found ",
            success : false
        });
    }
    // Check the role
    if (user.role != role){
        return res.status(403).json({
            message : "Not u're path",
            success : false
        });
    }
    // Check for password
    let isMatch = await bcrypt.compare(password,user.password);
    if(isMatch){
        // Singn in the token 
        let token = jwt.sign({
            user_id: user._id,
            role: user.role,
            username : user.username,
            email : user.email
            }, 
            SECRET,
            { expiresIn : "7 days" } 
            );

            let result = {
                username: user.username,
                role: user.role,
                email:user.email,
                token: `Bearer ${token}`,
                expiresIn : 168
            };

            return res.status(200).json({
                ...result,
                message : "Uou are Loged in ",
                success : true
            });

    }else{
        return res.status(403).json({
            message : "Incorrect Password",
            success : false
        });
    };
 };

 const validateUsername = async username => {
     let user = await User.findOne({username});
     return user ? false : true;
 };

 const validateEmail = async email => {
    let user = await User.findOne({email});
    return user ? false : true;
};

module.exports={
    userRegister,
    userlogin
}