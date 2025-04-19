const express = require('express');
const app = express();
const mongoose = require("mongoose");
// Middleware to parse URL-encoded data (from HTML forms)
app.use(express.urlencoded({ extended: true }));
// Optional: Middleware to parse JSON data if needed
app.use(express.json());


mongoose.connect("mongodb+srv://admin:%4007f5c9d@cluster0.96nmh.mongodb.net/real-estate");


const sellerSchema = new mongoose.Schema({
    name : String,
    email : String,
    password : String,
    licenseNumber : Number,
    phone : Number,
    credits : {
        type : Number,
        default : 5
    }
})

const buyerSchema = new mongoose.Schema({
    name : String,
    email : String,
    password : String,
    credits : {
        type : Number,
        default : 5
    }
})

const sellSchema = new mongoose.Schema({
    propertyName : String,
    address : String,
    url : String,
    price : Number,
    userId : String
})

const rentSchema = new mongoose.Schema({
    propertyName : String,
    address : String,
    description : String,
    url : String,
    price : Number,
    userId : String
})

const otpSchema = new mongoose.Schema({
    phone: String,
    otp: String,
    createdAt: {
      type: Date,
      default: Date.now,
      expires: 300, // expires in 5 minutes
    },
  });

const Seller = mongoose.model('seller',sellerSchema);
const Buyer = mongoose.model('buyer',buyerSchema);
const Sell = mongoose.model('sell',sellSchema);
const Rent = mongoose.model('rent',rentSchema);
const OTP = mongoose.model('OTP', otpSchema);

module.exports = {
    Seller,
    Buyer,
    Sell,
    Rent,
    OTP
}