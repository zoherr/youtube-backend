import dotenv from "dotenv"
import { app } from "./app.js"
import connectDB from "./db/db.js"
dotenv.config();

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
    connectDB()
})
