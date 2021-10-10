
const express = require("express");
const { createTest } = require("../controller/test");
const router = express.Router();


router.post("/test/create",createTest);

 
 module.exports = router;
