const mongoose = require('mongoose');
const checkoutSchema = new mongoose.Schema({
    
    cart_total:{
        type: Number,
        required: true
    },
    Promocode: { 
        type: Number,
        required: true
    },
    final_total:{
        type: Number,
        default:0
    },
    
    
});
module.exports = mongoose.model('Checkout', checkoutSchema);