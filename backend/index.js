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


app.listen(3000);