const mongoose = require('mongoose');

const CommandeStatusSchema = new mongoose.Schema({
    status : {
        type: String,
        required: true,
        default: "Delivered",
        enum:["Delivered","Done"]
    },
    commande: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Commande" 
    }],
    livreur: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Livreur" 
    }],
    user: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User" 
    }],
});

module.exports = mongoose.model('CommandeStatus', CommandeStatusSchema);