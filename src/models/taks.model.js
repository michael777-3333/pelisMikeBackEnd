import mongoose from "mongoose";

const taskSchema= new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    img:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    },
    user:{
        type:mongoose.Schema.Types.ObjectId, //el usuario es un id de mongo db
        ref:'User', //esta referenciando a otro modelo que este caso es user
        required:true   
    }
})

export default mongoose.model("Taks", taskSchema)