const {Router} = require("express");
const router = Router();
const jwt = require("jsonwebtoken");
const { Buyer, Seller } = require("../db"); 

router.get("/",async (req,res)=>{
    
    
    const authHeader = req.headers.authorization;
    

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        console.log("No token received in headers:", req.headers);
        return res.status(401).json({ message: "No token provided" });
    }

    const token = authHeader.split(" ")[1];

    let decoded;
    try {
    decoded = jwt.verify(token, "your_jwt_secret"); // Replace with your actual secret
    // decoded contains the payload you originally put while signing (e.g., userId, userType)
    } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
    }  
    // console.log(decoded);
    const userId = decoded.userId;
    const userType = decoded.role; // optional, if you added it in payload

    let user;
    if (userType === "buyer") {
        user = await Buyer.findById(userId);
        res.json({ 
            totalCredits : user.credits
        });
    } else if (userType === "seller") {
        user = await Seller.findById(userId);
        res.json({ 
            totalCredits : user.credits
        });
    }

    if (!user) {
    return res.status(404).json({ message: "User not found" });
    }

    // Now you have access to all user details
})

router.post('/decrement', async (req, res) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "No token provided" });
    }
  
    const token = authHeader.split(" ")[1];
  
    try {
      const decoded = jwt.verify(token, "your_jwt_secret");
      const { userId, role } = decoded;

      
      let user;
      if (role === "buyer") {
        user = await Buyer.findById(userId);
      } else if (role === "seller") {
        user = await Seller.findById(userId);
      }
  
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
  
      if (user.credits < 1) {
        return res.status(400).json({ message: "Insufficient credits" });
      }
  
      user.credits -= 1;
      await user.save();
  
      res.json({ updatedCredits: user.credits });
  
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Server error" });
    }
  });
  

module.exports = router;