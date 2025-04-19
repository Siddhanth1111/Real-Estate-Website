// backend/routes/sendOtp.js
const express = require('express');
const router = express.Router();
const twilio = require('twilio');

const client = new twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

router.post('/', async (req, res) => {
  const { phone } = req.body;

  if (!phone) return res.status(400).json({ msg: "Phone number required" });

  try {
    let msgOptions = {
        from : process.env.TWILIO_PHONE_NUMBER,
        to : `+91${phone}`
        
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Failed to send OTP', error: err.message });
  }
});

module.exports = router;
