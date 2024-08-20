import mongoose from "mongoose";

const userProfileSchema = new mongoose.Schema({
    userid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users',
        required:true
    },
    location:{
      type:Object
    },
    title:{
        type: String,
    },
    bio:{
        type: String,
    },
    userImage:{
        type: String,
    },
    eventImage:{
        type: String,
    },
    name:{
        type: String,
    }
})
const Services= mongoose.models.services ||  mongoose.model("services",userProfileSchema)
export default Services