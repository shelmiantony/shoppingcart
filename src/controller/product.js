const Product =require ('../models/product');


exports.createProduct = (req,res)=>{
  
  const { name, price ,product_id} = req.body;
  const product = new Product({
    name: name,
    price:price,
    product_id:product_id
  });

  product.save((error, product) => {
    if (error) return res.status(400).json({ error });
    if (product) {
      res.status(201).json({ product, files: req.files });
    }
  });


};