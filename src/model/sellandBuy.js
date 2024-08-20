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
    userImage:{
        type: String,
    },
    bio:{
        type: String,
    },
    eventImage:{
        type: String,
    },
    name:{
        type: String,
    }
})


const BuySell= mongoose.models.buySells ||  mongoose.model("buySells",userProfileSchema)



export default BuySell