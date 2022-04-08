const mongoose = require('mongoose');

const LivreurSchema = new mongoose.Schema({
    fullname:{
        type:String,
        required:true,
        min:4
    },
    username:{
        type:String,
        required:true,
        min:4
    },
    email:{
        type:String,
        required:true,
        max:255,
        min:6
    },
    password:{
        type:String,
        required:true,
        max:1024,
        min:6
    },
    date:{
        type:Date,
        default:Date.now
    },
    city:{
        type:String,
        required:true,
        max:255,
    },
    secteur:{
        type:String,
        required:true,
        max:255,
    }
});

module.exports = mongoose.model('Livreur', LivreurSchema);