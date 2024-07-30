import { connectDB } from "@/lib/config/db";
import UserModel from "@/lib/models/userModel";

const { NextResponse } = require("next/server");

const LoadDB = async () => {
    await connectDB();
}

LoadDB();

//API Endpoint to get all Blogs
export async function GET(request) {

    const { searchParams } = new URL(request.url);
    const username = searchParams.get('username');
    const password = searchParams.get('password');
    const user = await UserModel.findOne({ username });

    if(password === user.password){
        return NextResponse.json({success:true, message:"Successfully Logged in"});
    }
    else{
        return NextResponse.json({success:false, message:"Error"});
    }

}

// API Endpoint for uploading Blogs
export async function POST(request) {
    const formData = await request.formData();

    const userData = {
        username: `${formData.get('username')}`,
        password: `${formData.get('password')}`
    }
    

    await UserModel.create(userData);
    console.log("Saved");


    return NextResponse.json({ success: true, message: "Details Added", data: userData })
}