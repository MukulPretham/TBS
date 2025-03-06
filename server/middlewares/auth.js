import jwt from "jsonwebtoken";
import dotenv from "dotenv"

dotenv.config();

export let auth = (req,res,next)=>{
    const token = req.headers["authorization"];
    if(!token){
        return res.status(403).json({ msg: "Missing auth token" });
    }
    try{
        let decoded = jwt.verify(token, process.env.JWT_SECRET);
        if(decoded && decoded.userID){
            req.userID = decoded.userID;
            if(decoded.userID == "67c93085e6b5493be753b6ce"){
                req.role = "admin"
            }
            next();
        }else{
            return res.status(401).json({ msg: "Invalid token" });
        }
    }catch(error){
        return res.status(403).json({ msg: "Invalid token" });
    } 
}