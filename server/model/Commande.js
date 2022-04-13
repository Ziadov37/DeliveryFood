const mongoose = require('mongoose');

const CommandeSchema = new mongoose.Schema({
    orderItems: [
        {
          qty: { 
            type: Number, 
            required: true 
          },
          repasId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'Repas',
          },
        },
      ],
    status : {
        type: String,
        required: true,
        default: "Waiting",
        enum:["Waiting","Delivered"]
      },
    user: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        required: true,
        ref: "User" 
      }],
    shippingAddress: {
        street: { type: String, required: true },
        city: { type: String, required: true },
      },
    phoneNumber: {
        type: String,
        required: true,
      },
    totalPrice: {
        type: Number,
        required: true,
        default: 0.0,
      },
    isDelivered: {
        type: Boolean,
        default: false,
      },
     deliveredAt: {
        type: Date,
      },
    deliveredBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Livreur',
      },
});

module.exports = mongoose.model('Commande', CommandeSchema);