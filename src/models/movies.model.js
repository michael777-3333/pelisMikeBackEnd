import mongoose from "mongoose";

const MoviesSchema= new mongoose.Schema({
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
    type:{
        type:String,
        required:true
    },
    genres:{
        type:mongoose.Schema.Types.ObjectId, //el usuario es un id de mongo db
        ref:'Genres', //esta referenciando a otro modelo que este caso es user
        required:true   
    },
    video:{
        type:String
    }
})

export default mongoose.model("Movies", MoviesSchema)