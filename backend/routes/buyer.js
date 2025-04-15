const { Router } = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { Buyer } = require("../db"); // Assuming you have a Buyer model
const router = Router();

router.post("/", async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // Check if the buyer already exists
        const existingBuyer = await Buyer.findOne({ email });

        if (existingBuyer) {
            return res.status(403).json({
                msg: "Buyer already exists"
            });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create the new buyer
        const buyer = await Buyer.create({
            name,
            email,
            password: hashedPassword, // Store the hashed password
        });

        // Generate a JWT token
        const token = jwt.sign(
            { userId: buyer._id, userType: 'buyer' }, // Payload (include userType for validation in the login route)
            'your_jwt_secret', // Replace this with your secret key
            { expiresIn: '1h' } // Token expiration time
        );

        // Respond with a success message and the generated token
        res.json({
            name,
            msg: "Buyer created successfully",
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
