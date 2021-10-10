const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    
    product_id:{
        type: Number,
        required: true
    },name: { 
        type: String, 
        required: true, 
        trim: true 
    },
    
    price: { 
        type: Number, 
        required: true 
    },
   
    
});


module.exports = mongoose.model('Product', productSchema);