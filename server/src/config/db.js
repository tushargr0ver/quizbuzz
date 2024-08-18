//DB connection
import app from '../app.js'
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config()

async function db(){

    await mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
    console.log("DB connected");
    app()
    
    }).catch((err)=>{
    console.log("DB not connected",err);
    
})}

export default db