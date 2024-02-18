import mongoose from "mongoose";

const userSchema =new mongoose.Schema({
    fullName:{
        type:String, 
        required:true,
    },
    username:{
        type:String,
        reqruired:true,
        unique:true,
    },
    password:{
        type:String,
        reqruired:true,
        minlength:6,
    },
    gender:{
        type:String,
        reqruired:true,
        enum:["male","female"],
    },
    profilePic:{
        type:String,
        default:"",
    },
},{timestamps: true});

const User = mongoose.model("User",userSchema);

export default User;