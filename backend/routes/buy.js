const {Router, application} = require("express");
const { Sell, Seller } = require("../db");
const router = Router();
const mongoose = require("mongoose");
router.get("/",async(req,res)=>{
    const data = await Sell.find({});
    res.json(data);
})

router.post("/details",async(req,res)=>{
    const userId = req.body.userId;
    const user = await Seller.findById(userId);
    res.json({
        name : user.name,
        email : user.email,
        phone : user.phone
    })
})




module.exports = router;