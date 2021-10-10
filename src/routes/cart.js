const express = require("express");
const {  } = require('../controller/product');
const router = express.Router();
const { createCart } = require("../controller/cart");
// const {getCartList} = require('../controller/cart');

// const { getCartlist  } = require("../controller/cart");


router.post("/cart/create",createCart );
// router.get("/cart/getcartlist ",getCartlist  );

// router.get("/list", async (req, res) => {
//     try {
//       // let item = await getDistrictsList(req);
//       let item = await getCartList(req)
//       res.status(200).json({
//         status: 200,
//         data: item,
//       });
//     } catch (err) {
//       console.log(err);
//       res.status(400).json({
//         message: err.message,
//       });
//     }
//   });

 
 module.exports = router;