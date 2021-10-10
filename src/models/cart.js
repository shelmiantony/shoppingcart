const mongoose = require('mongoose');
const cartSchema = new mongoose.Schema({
    // cart_items:[{
        
    // }]
        cart_status:{
            type: Number,
            default:0
        },
        product_id:{
            type: Number,
            required: true
        },
        quantity: { 
            type: Number, 
            required: true 
        },
        price:{
            type:Number,
            default:0
        },
        amount:{
            type:Number,
            default:0
        },
        discount_amount:{
            type:Number,
            default:0
        },
        item_total:{
            type:Number,
            default:0
        },
        cart_total:{
            type: Number,
            default:0
            // required: true
        },


   

     
}, 

);


module.exports = mongoose.model('Cart', cartSchema);