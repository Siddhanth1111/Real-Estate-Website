const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const cors = require("cors");
app.use(cors());
const dotenv = require('dotenv');
dotenv.config();

app.use(express.json());

const sellRouter = require("./routes/sell")
app.use("/sell",sellRouter);

const buyRouter = require("./routes/buy")
app.use("/buy",buyRouter);

const buyerRouter = require("./routes/buyer")
app.use("/buyer",buyerRouter)

const sellerRouter = require("./routes/seller");
app.use("/seller",sellerRouter);


const authRouter = require("./routes/auth");
app.use("/login",authRouter)

const creditsRouter = require("./routes/credits");
app.use("/credits",creditsRouter)

const propertyRouter = require("./routes/property");
app.use("/property",propertyRouter)

const rentRouter = require("./routes/rent");
app.use("/rent",rentRouter)

// const sendOtpRoute = require('./routes/sendOtp');
// const verifyOtpRoute = require('./routes/verifyOtp');
// app.use('/send-otp', sendOtpRoute);
// app.use('/verify-otp', verifyOtpRoute);

const router = express.Router();
const Otp = require("./db")


const sendOtp = require('./utils/sendOtp');

router.post('/send-otp', async (req, res) => {
  const { phone } = req.body;
  const otp = Math.floor(100000 + Math.random() * 900000).toString();

  await Otp.deleteMany({ phone }); // clear previous
  const saved = new Otp({ phone, otp });
  await saved.save();

  const sent = await sendOtp(phone, otp);
  if (!sent) return res.status(500).json({ msg: 'Failed to send OTP' });

  res.json({ msg: 'OTP sent successfully' });
});

router.post('/verify-otp', async (req, res) => {
    const { phone, otp } = req.body;
    const valid = await Otp.findOne({ phone, otp });
  
    if (!valid) return res.status(400).json({ msg: 'Invalid OTP' });
  
    await Otp.deleteMany({ phone }); // clear once verified
    res.json({ msg: 'OTP verified successfully' });
  });
  

const PORT = 3000;

app.listen(PORT,(req,res)=>{
    console.log("Server started");
})