const {Router} = require("express");
const { Sell, Seller } = require("../db");
const router = Router();
const jwt = require("jsonwebtoken")


router.post("/",async(req,res)=>{
    const propertyName = req.body.propertyName;
    const address = req.body.address;
    const url = req.body.url;
    const price = req.body.price;
    const authHeader = req.headers.authorization;
    const token = authHeader.split(" ")[1];
    let decoded;
    try{
        decoded = jwt.verify(token,"your_jwt_secret");
        const userId = decoded.userId;

        await Sell.create({
            propertyName,
            address,
            url,
            price,
            userId
        })
    
        res.json({
            msg : "property added successfully",
        })

    }
    catch{
        console.log("sell request could not be proceeded due to some issue")
    }

    

})





module.exports = router;