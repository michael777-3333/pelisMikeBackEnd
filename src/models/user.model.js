import mongoose from "mongoose";
// import { boolean } from "zod";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    },
    movie:{
        type:Boolean,
        default:false
    }
}, {
    timestamps:true
}
)

export default mongoose.model('User', userSchema) 