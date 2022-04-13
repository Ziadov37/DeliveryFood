const mongoose = require('mongoose');

const RestaurantSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        min:4
    },
    date:{
        type:Date,
        default:Date.now
    },
    city:{
        type:String,
        required:true,
        min:10
    },
    phone: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    images:[{
        type: String,
        required: true,
    }],
    manager_id:[{
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User" 
    }]
});

module.exports = mongoose.model('Restaurant', RestaurantSchema);