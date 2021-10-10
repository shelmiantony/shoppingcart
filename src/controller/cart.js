const Cart =require ('../models/cart');
// const Product = require('../models/product')

exports.createCart = (req,res)=>{
  var item_total =0;
 

    const {product_id,quantity} = req.body;
  // const cart = new Cart({product_id,quantity});
  // const item = Cart.find(c => product_id == 1);
  //             let condition, update;
  if(product_id==1)
    {
        if(quantity<3){
            res.status(200).json({
              message:"Minimum quantity for notebook is 3"
            })
        }else if(quantity>=3 && quantity <5 ){
            res.status(200).json({
              message: quantity +" Notebooks are sucessfully added to the cart"
            })
            const cart = new Cart({product_id,
            quantity,
            price:100,
            amount:quantity*100,
            item_total
            });
          
            cart.item_total=cart.amount

            cart.save((error, cart) => {
            if (error) return res.status(400).json({ error });
            if (cart) { res.status(201).json({ cart });}
            });
        } else if(quantity==5){
              res.status(200).json({
                message: quantity +" Notebooks are sucessfully added to the cart"
              })
              const cart = new Cart({
                product_id,
                quantity,
                price:100,
                amount:quantity*100,
                discount_amount:quantity*100*0.1,
                item_total:(quantity*100)-(quantity*100*0.1)
              });
              cart.save((error, cart) => {
                if (error) return res.status(400).json({ error });
                if (cart) { res.status(201).json({ cart });}
              });

        }else if(quantity>5){
              res.status(200).json({
                message: quantity +" Notebooks are sucessfully added to the cart"
              })
              const cart = new Cart({
                product_id,
                quantity,
     
                price:100,
                amount:quantity*100,
                discount_amount:60,
                item_total:(quantity*100)-(60)
              });
              cart.save((error, cart) => {
                if (error) return res.status(400).json({ error });
                if (cart) { res.status(201).json({ cart });}
              });
        }    
    
  // Sanitizer
  
  } else if(product_id==2)
  {
            if(quantity<10){
              res.status(200).json({
                message:"Minimum quantity for Sanitizer is 10"
              })
            }else if(quantity>10 && quantity<13){
              res.status(200).json({
                message:quantity +" Sanitizers are sucessfully added to the cart"
              })
              const cart = new Cart({product_id,
                quantity,
                price:250,
                amount:quantity*250,
                item_total:quantity*250
                });
              cart.save((error, cart) => {
                if (error) return res.status(400).json({ error });
                if (cart) { res.status(201).json({ cart });}
              });
            }else if(quantity>=13){
              res.status(200).json({
                message:quantity +" Sanitizers are sucessfully added to the cart & you get 100 Rs/- discount"
              })
              const cart = new Cart({product_id,
                quantity,
                price:250,
                amount:quantity*250,
                discount_amount:100,
                item_total:(quantity*250)-(100)

                });
              cart.save((error, cart) => {
                if (error) return res.status(400).json({ error });
                if (cart) { res.status(201).json({ cart });}
              }); 
            }


  }else if(product_id==3)
  {

      if( quantity>2 ){
        res.status(200).json({
          message:" Maximum quantity for Bag is 2 "
        })
      }else if(quantity<=2 ){

        res.status(200).json({
          message:quantity +" bags are sucessfully added to the cart"
        })
        const cart = new Cart({product_id,
          quantity,
          price:1500,
          amount:quantity*1500,
          item_total:quantity*1500

          });
        cart.save((error, cart) => {
          if (error) return res.status(400).json({ error });
          if (cart) { res.status(201).json({ cart });}
        }); 

      }




  }
};

// exports.getCartList  = (req,res)=>{
//   let cart = new Cart.find({
//     cart_status:0
//   })
//   return res.status(200)({cart})
// }




// getCartList = (req) => {
//   return new Promise(async (resolve, reject) => {
//     try {
//       let cart = await Cart.find({
//         cart_status: 0,
//       })
      
      
//       resolve(cart);
//     } catch (err) {
//       console.log(err);
//       reject({
//         message: err.message,
//       });
//     }
//   });
// };