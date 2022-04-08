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
    
});

module.exports = mongoose.model('Restaurant', RestaurantSchema);