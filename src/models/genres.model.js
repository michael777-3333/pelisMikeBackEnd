import mongoose from "mongoose";

const genresSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },

    
})

export default mongoose.model("Genres", genresSchema)