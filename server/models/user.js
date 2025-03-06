import mongoose from "mongoose";

let userSchema = new mongoose.Schema({
    username: String,
    email: String,
    city: String,
    state: String,
    password: String,
    bookings: [Object],
    wallet: Number
})

export let User = mongoose.model("users",userSchema);