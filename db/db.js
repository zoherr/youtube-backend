import mongoose from "mongoose";
import asyncHandler from "../utils/asyncHandler.js";
const connectDB = asyncHandler(() => {
  try {
    mongoose.connect(process.env.DB_URL).then(() => {
      console.log("Connect");
    });
  } catch (error) {
    console.log("DB error: ", error);
  }
});
export default connectDB;
