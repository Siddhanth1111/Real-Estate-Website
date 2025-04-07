const {Router} = require("express");
const { Sell } = require("../db");
const router = Router();


router.post("/",async(req,res)=>{
    const propertyName = req.body.propertyName;
    const address = req.body.address;
    const url = req.body.url;
    const price = req.body.price;

    await Sell.create({
        propertyName,
        address,
        url,
        price
    })

    res.json({
        msg : "property added successfully"
    })

})





module.exports = router;