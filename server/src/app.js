//Express server

import express from "express";
import userRoutes from "./routes/userRoutes.js";
import { configDotenv } from "dotenv";

const e  = express()


configDotenv()
const PORT = process.env.PORT

function app() {
   
    e.use(express.json())
     e.use(userRoutes)
    
    e.listen(PORT,
        ()=>{
        console.log("Server running at ",PORT);
        
    })
}

export default app
   
