import mongoose, { Schema } from "mongoose";

const schema = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    phone: {
      type: String,
    },
    bio: {
      type: String,
    },
    address1: {
      type: String,
    },
    address2: {
      type: String,
    },
    country: {
      type: String,
    },
    imageurl: {
      type: String,
    },
    pincode: {
      type: String,
    },
    city: {
      type: String,
    },
    state: {
      type: String,
    },
    firsttimeuser: {
      type: Boolean,
      default: false,
    },
    location:{
      type:Object
    },
    longitute: {
      type: String,
    },
    latitute: {
      type: String,
    },
  },
  { timestamp: true }
);


export default mongoose.models.userdatas || mongoose.model("userdatas", schema);
