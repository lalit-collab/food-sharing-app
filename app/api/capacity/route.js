import { connectDB } from "@/lib/config/db";
import FoodModel from "@/lib/models/FoodModel";
const { NextResponse } = require("next/server");

const LoadDB = async () => {
    await connectDB();
}

LoadDB();

// API Endpoint for updating member count
export async function POST(request) {
    const formData = await request.formData();
    const id = formData.get('id');

    // Find the food item by id
    const foodItem = await FoodModel.findById(id);

    if (!foodItem) {
        return NextResponse.json({ success: false, message: "Food item not found" });
    }

    // Check if the current number of members is less than the capacity
    if (foodItem.current < foodItem.capacity) {
        // Increment the current number of members
        foodItem.current += 1;
        await foodItem.save();
        return NextResponse.json({ success: true, message: "Member added successfully" });
    } else {
        return NextResponse.json({ success: false, message: "Capacity reached" });
    }
}
