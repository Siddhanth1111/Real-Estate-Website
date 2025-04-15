const { Router } = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { Seller } = require("../db"); // Assuming you have a Seller model
const router = Router();

router.post("/", async (req, res) => {
    const { name, email, password, licenseNumber, phone } = req.body;

    try {
        // Check if the seller already exists
        const existingSeller = await Seller.findOne({ email });

        if (existingSeller) {
            return res.status(403).json({
                msg: "Seller already exists"
            });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create the new seller
        const seller = await Seller.create({
            name,
            email,
            password: hashedPassword, // Store the hashed password
            licenseNumber,
            phone
        });

        // Generate a JWT token
        const token = jwt.sign(
            { userId: seller._id, userType: 'seller' }, // Payload (include userType for validation in the login route)
            'your_jwt_secret', // Replace this with your secret key
            { expiresIn: '1h' } // Token expiration time
        );

        // Respond with a success message and the generated token
        res.json({
            name,
            msg: "Seller created successfully",
            token // Send the token to the client
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({
            msg: "Internal server error"
        });
    }
});

module.exports = router;
