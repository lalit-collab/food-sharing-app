import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://miniproject4316:rollno4316@cluster0.ztlhcyh.mongodb.net/')
    console.log('db connected');
}