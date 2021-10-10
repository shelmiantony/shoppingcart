
const express = require("express");
const { checkOut } = require("../controller/checkout");
const router = express.Router();


router.post("/promocode",checkOut);
 module.exports = router;
