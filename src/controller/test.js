const Test =require ('../models/test');


exports.createTest = (req,res)=>{
  
  const { testDetails} = req.body;
  const test = new Product({
    testDetails:[{
        name: name,
        price:price,
        test_id:test_id
    }
        
    ]
   
  });

  test.save((error, test) => {
    if (error) return res.status(400).json({ error });
    if (test) {
      res.status(201).json({ test });
    }
  });


};