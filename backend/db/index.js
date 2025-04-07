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
    lisenceNumber : Number,
    phone : Number,
})

const buyerSchema = new mongoose.Schema({
    name : String,
    email : String,
    username : String,
    password : String,


})

const renterSchema = new mongoose.Schema({
    name :  String,
    email : String,
    password : String,
    phone : Number,

})

const sellSchema = new mongoose.Schema({
    propertyName : String,
    address : String,
    url : String,
    price : Number
})


const Seller = mongoose.model('seller',sellerSchema);
const Buyer = mongoose.model('buyer',buyerSchema);
const Renter = mongoose.model('renter',renterSchema);
const Sell = mongoose.model('sell',sellSchema);

module.exports = {
    Seller,
    Buyer,
    Renter,
    Sell
}