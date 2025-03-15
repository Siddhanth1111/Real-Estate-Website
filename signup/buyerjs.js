const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
import { validateForm } from "./buyerApp";

mongoose.connect("mongodb+srv://admin:%4007f5c9d@cluster0.96nmh.mongodb.net/usersappnew");

const User = mongoose.model('Users',{
    name : String,
    email : String,
    phone : String,
    location : String
});




app.post("/buyer.html",async function(req,res){
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;

    const existingUser = await User.findOne({email : username});
    if(existingUser){
        return res.status(400).send("User already exists");
    }

    const user = new User({
        name : name,
        email : username,
        password : password
    });

    user.save();
    res.json({
        "msg" : "User created successfully"
    })

})

app.listen(3000);