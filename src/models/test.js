const mongoose = require('mongoose');
const testSchema = new mongoose.Schema({
    testDetails:[{
        test_id:{
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
    }]
    
   
    
});


module.exports = mongoose.model('test', testSchema);