const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { Buyer } = require('../db');
const { Seller } = require('../db');

const JWT_SECRET = 'your_secret_key'; // put in .env in real projects

router.post("/", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check in buyers collection
    let user = await Buyer.findOne({ email });
    let role = 'buyer';

    // If not found, check in sellers collection
    if (!user) {
      user = await Seller.findOne({ email });
      role = 'seller';
    }

    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    const token = jwt.sign({ id: user._id, role, name: user.name }, JWT_SECRET, { expiresIn: '1h' });

    res.json({ token, role, name: user.name });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
