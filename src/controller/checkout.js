const Checkout = require('../models/checkout')

exports.checkOut = (req,res)=>{
  
    const {cart_total, Promocode} = req.body;

    if(cart_total<=10000)
    res.status(200).json({
        message:"Minimum amount for promocode is 10001"
      })
    else {
        res.status(200).json({
            message:"Promo code is applicable"
          });
        const checkout = new Checkout({
            final_total : cart_total-Promocode
            
            });
            checkout.save((error,checkout) => {
            if (error) return res.status(400).json({ error });
            if (checkout) { res.status(201).json({checkout });}
            });
    }
  
    
  
  
  };