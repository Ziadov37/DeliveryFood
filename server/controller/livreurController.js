const bcrypt = require("bcryptjs");
const Livreur = require("../model/Livreur");
const jwt = require("jsonwebtoken");
const {SECRET} = require('../config/config');



const livreurRegister = async(userDets,req,res)=>{
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
       // Create new Livreur
       const newLivreur = new Livreur({
           ...userDets,
           password
       });
       await newLivreur.save();
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

const livreurlogin = async (userCreds, req, res) => {
    let {username, password} = userCreds;
    // First check username in the database
    const livreur = await Livreur.findOne({username});
    if(!livreur){
        return res.status(404).json({
            message : "Username is not found ",
            success : false
        });
    }
    // Check for password
    let isMatch = await bcrypt.compare(password,livreur.password);
    if(isMatch){
        // Singn in the token 
        let token = jwt.sign({
            livreur_id: livreur._id,
            username : livreur.username,
            email : livreur.email
            }, 
            SECRET,
            { expiresIn : "7 days" } 
            );

            let result = {
                username: livreur.username,
                email:livreur.email,
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
    let livreur = await Livreur.findOne({username});
    return livreur ? false : true;
};

const validateEmail = async email => {
   let livreur = await Livreur.findOne({email});
   return livreur ? false : true;
};
module.exports={
    livreurRegister,
    livreurlogin
}
