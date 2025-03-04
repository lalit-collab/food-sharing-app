import mongoose from "mongoose";

const Schema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
})

const UserModel = mongoose.models.user || mongoose.model('user',Schema);

export default UserModel;