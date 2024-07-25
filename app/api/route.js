import { connectDB } from "@/lib/config/db";
import FoodModel from "@/lib/models/FoodModel";

const { NextResponse } = require("next/server");

const LoadDB = async () => {
    await connectDB();
}

LoadDB();

//API Endpoint to get all Blogs
export async function GET(request){

    const foodId = request.nextUrl.searchParams.get("id");

    if(foodId){
        const food = await FoodModel.findById(foodId);
        return NextResponse.json({food});
    }
    else{
        const food = await FoodModel.find({});
        return NextResponse.json({food});
    }
}


// API Endpoint for uploading Blogs
export async function POST(request){
    const formData = await request.formData();

    const foodData = {
        name: `${formData.get('name')}`,
        description: `${formData.get('description')}`,
        city: `${formData.get('city')}`,
        street: `${formData.get('street')}`
    }

    await FoodModel.create(foodData);
    console.log("Saved");


    return NextResponse.json({success:true,message:"Details Added"})
}