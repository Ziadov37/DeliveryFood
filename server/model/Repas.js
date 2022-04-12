const mongoose = require('mongoose');

const RepasSchema = new mongoose.Schema({
    name : {
        type:String,
        required:true,
        min:4
    },
    description : {
        type:String,
        required:true,
        max : 255
    },
    category : {
        type:String,
        required:true,
        min : 4 
    },
    images : [{
        type: String,
        required: true,
    }],
    restaurant: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Restaurant" 
    }],
});

module.exports = mongoose.model('Repas', RepasSchema);