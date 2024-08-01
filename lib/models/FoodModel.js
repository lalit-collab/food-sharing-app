import mongoose from "mongoose";

const Schema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    capacity:{
        type:Number,
        required:true
    },
    current:{
        type:Number,
        required:true
    }
    
})

const FoodModel = mongoose.models.food || mongoose.model('food',Schema);

export default FoodModel;