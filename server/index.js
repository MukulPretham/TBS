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
        password: currPassword,
        wallet:0
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

//add money route
app.post("/addMoney",auth,async(req,res)=>{
    // res.send("hello")
    if(req.role != "admin"){
        return res.json({status: "access denied"});
    }
    let customer = req.query.customerUsername;
    let currUser = await User.findOne({username: customer});
    let amount = req.query.amount;
    let currWallet = currUser.wallet;
    let finalAmount = parseInt(currWallet)+parseInt(amount)
    await User.updateOne({username:customer},{$set: {wallet: finalAmount}});
    res.json({
        msg: `${amount} added to ${customer}`
    })
})

//bokking path
app.post("/book",auth,async(req,res)=>{
    let currUser = await User.findOne({_id: req.userID});
    //getting bus details
    let response = await fetch(`http://localhost:3001/buses/bookings/${req.query.busID}`);
    let currBus = await response.json();
    let fare = currBus["fare"];
    let bookedSeats = req.body.seatsSelected;
    if(bookedSeats*currBus.fare > currUser.wallet){
        return res.json("insufficient balance");
    }
    //bokking process
    let response2 = await fetch(`http://localhost:3001/buses/bookSeat/${currBus._id}`,{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },      
        body: JSON.stringify({ seatLayout: req.body.seatLayout })

    })
    let final = await response2.json();
    let currentPrice = bookedSeats*currBus.fare;
    let finalWallet = currUser.wallet - (bookedSeats*currBus.fare);
    await User.updateOne({_id: currUser._id},{$set:{wallet: finalWallet }});
    let bookings = currUser.bookings;
    bookings.push({seats: bookedSeats,seatNumbers: req.body.bookedSeats,from: currBus.fromAddress, to: currBus.toAddress,paid: currentPrice, date: currBus.date,time: currBus.time, BusNumber: currBus._id });
    await User.updateOne({_id: currUser._id},{$set:{bookings: bookings}});
    res.json(final);
})

//sending bookings details
app.get("/getBookings",auth,async(req,res)=>{
    try{
        let currUser = await User.findOne({_id: req.userID});
        let currBookings = currUser["bookings"];
        res.json(currBookings);
    }catch(error){
        res.status(500).json({msg:"something went wrong"});
    }
})

app.listen(process.env.PORT,()=>{
    console.log("server is live");
})