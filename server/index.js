import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import jwt from "jsonwebtoken";
import { auth } from "./middlewares/auth.js";
import { User } from "./models/user.js";

let app = express();

//Middlewares
app.use(express.json());
app.use(cors());
dotenv.config();

//DB connection
mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("Database connected.");
})

app.get("/",(req,res)=>{
    res.send("hello");
})

app.post("/signIn",async(req,res)=>{
    let currUsername = req.body.username;
    if(await User.findOne({username:currUsername})){
        return res.status(409).json({message: "user already exist"});
    }
    let currEmail = req.body.email;
    if(await User.findOne({email:currEmail})){
        return res.status(409).json({message: "email already exist"});
    }
    let currPassword = req.body.password;
    let currCity = req.body.city;
    let currState = req.body.state;
    let newUser = new User({
        username: currUsername,
        email: currEmail,
        city : currCity,
        state: currState,
        password: currPassword
    })
    await newUser.save();
    console.log("new user registered");
    res.status(200).json({Status: 'success'});
})

app.post("/logIn",async(req,res)=>{
    let currUsername = req.body.username;
    let currPassword = req.body.password;
    let currUser = await User.findOne({username: currUsername});
    if(!currUser){
        return res.status(404).json({message : "Invalid username"});
    }
    if(currUser.password !== currPassword ){
        return res.status(404).json({message : "Invalid password"});
    }
    //Creating a token
    let token = jwt.sign(
        {userID:currUser._id,username: currUsername},
        process.env.JWT_SECRET
    );
    res.json({token});
})

app.get("/users",auth,async(req,res)=>{
    let currUser = await User.findOne({_id:req.userID});
    res.status(200).json(currUser);
})

app.listen(process.env.PORT,()=>{
    console.log("server is live");
})