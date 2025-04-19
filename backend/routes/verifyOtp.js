// backend/routes/verifyOtp.js
const express = require('express');
const router = express.Router();
const twilio = require('twilio');

const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

router.post('/', async (req, res) => {
  const { phone, otp } = req.body;

  if (!phone || !otp) return res.status(400).json({ msg: "Phone and OTP required" });

  try {
    const verification_check = await client.verify.v2
      .services(process.env.TWILIO_SERVICE_SID)
      .verificationChecks.create({ to: `+91${phone}`, code: otp });

    if (verification_check.status === "approved") {
      res.status(200).json({ msg: "OTP verified successfully" });
    } else {
      res.status(400).json({ msg: "Invalid OTP" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Verification failed", error: err.message });
  }
});

module.exports = router;
