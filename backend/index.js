const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const cors = require("cors");
app.use(cors());

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

const PORT = 3000;

app.listen(PORT,(req,res)=>{
    console.log("Server started");
})