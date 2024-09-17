import express from "express";
import dotenv from "dotenv"
import cookieParser from "cookie-parser";
export const app = express()
dotenv.config();
app.use(cookieParser())
app.use(express.json({limit:"16kb"}))
app.get("/",(req,res)=> {
    res.send("Okay ")
})
