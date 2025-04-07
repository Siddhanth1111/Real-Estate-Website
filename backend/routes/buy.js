const {Router, application} = require("express");
const { Sell } = require("../db");
const router = Router();
const mongoose = require("mongoose");
router.get("/",async(req,res)=>{
    const data = await Sell.find({});
    res.json(data);
})




module.exports = router;