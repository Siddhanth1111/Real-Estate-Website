const {Router} = require("express");
const router = Router();
const jwt = require("jsonwebtoken");

const {Rent, Seller, Buyer} = require("../db")

router.post("/",async(req,res)=>{
    const authHeader = req.headers.authorization;
    const {propertyName,address,description,url,price} = req.body;
    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(token,"your_jwt_secret");
    const {userId} = decoded;
    
    await Rent.create({
        propertyName,
        address,
        description,
        url,
        price,
        userId
    })

    res.status(200).json({
        msg : "Rent property successfully put into database"
    })

})

router.get("/",async(req,res)=>{
    const data = await Rent.find({});
    res.json(data);
})

router.post("/details",async(req,res)=>{
    const userId = req.body.userId;
    let user = await Seller.findById(userId);
    if(!user){
        user = await Buyer.findById(userId);
    }
    res.json({
        name : user.name,
        email : user.email,
        phone : user.phone
    })
})

module.exports = router;