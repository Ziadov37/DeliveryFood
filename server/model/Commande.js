const mongoose = require('mongoose');

const CommandeSchema = new mongoose.Schema({
    status : {
        type: String,
        required: true,
        default: "Waiting",
        enum:["Waiting","Delivered"]
    },
    user: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User" 
    }],
    restaurant: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Restaurant" 
    }],
    repas: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Repas" 
    }],
});

module.exports = mongoose.model('Commande', CommandeSchema);