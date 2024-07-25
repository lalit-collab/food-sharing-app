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
    street:{
        type:String,
        required:true
    }
    // time:{
    //     type:String,
    //     required:true
    // }
})

const FoodModel = mongoose.models.food || mongoose.model('food',Schema);

export default FoodModel;